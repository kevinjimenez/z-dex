# Login con Google — Guía de implementación

Guía paso a paso para agregar autenticación con Google a z-dex, siguiendo los
patrones que ya existen en el proyecto (feature folders, Zustand +
`LocalStorageAdapter`, `BaseButton`, `env.ts` con Zod).

> Nota (`AGENTS.md`): Expo cambió mucho de versión a versión. Este proyecto
> usa **Expo SDK 57** — si algo no cuadra, revisa
> https://docs.expo.dev/versions/v57.0.0/ antes de improvisar.

## 0. Decisión de librería

Descartamos `expo-auth-session` genérico: para Google, Expo recomienda usar
la librería nativa del proveedor. Quedan dos candidatas, ambas requieren
**development build** (no funcionan en Expo Go — no es problema, el proyecto
ya tiene `ios/` y `android/` generados):

| | `@react-native-google-signin/google-signin` (**Opción A**, la que sigue esta guía) | `react-native-nitro-google-signin` (**Opción B**, ver [apéndice](#apéndice-usando-react-native-nitro-google-signin)) |
|---|---|---|
| Arquitectura | Bridge nativo clásico | Nitro Modules + JSI (llamadas directas JS↔nativo, necesita `react-native-nitro-modules`, RN 0.76+) |
| Credential Manager en Android (API moderna, la que Google empuja hoy) | Solo en el tier pago "Universal Sign-In" | Incluido gratis |
| SDK usado en Android (tier gratis) | Legacy Google Sign-In SDK (deprecado por Google, pero sigue funcionando) | Credential Manager (actual) |
| Madurez / comunidad | Alta — 3.5k+ ⭐, años en producción, muchísima documentación | Media/baja — más nueva, menos rodaje |
| Soporte Expo | Config plugin propio | Config plugin propio |

**Recomendación**: si preferís algo con más kilometraje y no te molesta que
la versión gratis use el SDK legacy mientras siga funcionando, andá con la
**Opción A** (el resto de esta guía la sigue). Si preferís no depender de un
SDK ya deprecado y no tenés problema con una librería más nueva, la
**Opción B** es la más correcta técnicamente — saltá al
[apéndice](#apéndice-usando-react-native-nitro-google-signin) para ver qué
cambia.

---

## 1. Google Cloud Console

### 1.1 Configurar la pantalla de consentimiento de OAuth (prerrequisito)

Antes de poder crear los Client IDs, Google exige tener configurada la
**OAuth consent screen**. Si el proyecto es nuevo (o no la tenía configurada),
al entrar a **APIs & Services → Credentials** vas a ver un banner pidiendo
esto. Pasos:

1. **Tipo de usuario**: elegí **"Usuarios externos"** (Externo). "Interno"
   solo está disponible con una cuenta de Google Workspace (dominio propio);
   con Gmail personal ni aparece como opción usable.
2. **Datos de la app**: nombre, logo, email de soporte.
3. **Información de contacto**: tu email (donde Google avisa de cambios de
   política o problemas con la app).
4. **Finalizar**: aceptar la política de datos de usuario → **Create**.

Con "Externo" la app queda en **modo de prueba (Testing)**: solo pueden
loguearse las cuentas que agregues a mano en **Audience → Test users**
(hasta 100). Agregá ahí tu propia cuenta de Gmail y la de cualquiera que
vaya a probar el login — si no está en la lista, el login falla con
"acceso bloqueado" aunque el código esté perfecto.

> **Aclaración de nombres**: el menú lateral de este panel se llama
> "Google Auth Platform", y ahí "Audience" aparece traducido como
> **"Público"** (no dice "Audience" en la UI en español). Los Client IDs
> del siguiente paso se crean con el botón **"Crear cliente de OAuth"**
> desde la sección **"Clientes"** de ese mismo menú.

No hace falta **verificar** la app ante Google ni para seguir en modo
prueba indefinidamente ni para pasar a producción, porque solo vamos a
pedir scopes básicos (`email`, `profile`, `openid`) — la verificación
solo se exige con scopes sensibles/restringidos (Gmail, Drive, Calendar,
etc.), que no es este caso.

### 1.2 Crear los OAuth Client IDs

Entra a [Google Cloud Console](https://console.cloud.google.com/) → **APIs &
Services → Credentials** (o **Clientes**, dentro del menú "Google Auth
Platform") → **Crear cliente de OAuth**. Hay que crear **3**, uno por cada
"Tipo de aplicación":

#### Web application

Este es el `webClientId` — se usa en código (`GoogleSignin.configure`),
incluso para los flujos de iOS/Android, porque es el que genera el
`idToken`.

- **Nombre**: lo que quieras, por ejemplo `z-dex Web Client` (solo identifica
  el cliente en la consola, no lo ve el usuario final).
- **Orígenes autorizados de JavaScript** y **URIs de redireccionamiento**:
  dejar **ambos vacíos**. No hay flujo de redirect web real — el login pasa
  por el SDK nativo del dispositivo, este client ID solo actúa como
  identificador/audience del token.
- Crear y copiar el **Client ID** (`...apps.googleusercontent.com`) → va en
  `EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID` (sección 5).

#### Android

- **Nombre**: por ejemplo `z-dex Android (debug)` — vas a necesitar crear
  otro cliente Android más adelante para el keystore de release/producción,
  este nombre ayuda a diferenciarlos.
- **Nombre del paquete**: `com.anonymous.zdex` (ver `app.json` →
  `android.package`).
- **Huella digital del certificado SHA-1**: sacala del keystore de debug que
  ya está en el repo:

  ```bash
  keytool -list -v -keystore android/app/debug.keystore \
    -alias androiddebugkey -storepass android -keypass android
  ```

  Para producción hace falta **otro** Client ID Android (mismo package, SHA-1
  distinto: el de tu keystore de release o el de Play App Signing) — no
  reemplaza a este, se suman.

  Este Client ID no se referencia en código: el SDK lo resuelve solo en
  runtime combinando package name + firma del APK.

#### iOS

- **Nombre**: por ejemplo `z-dex iOS`.
- **ID del paquete**: `com.anonymous.zdex` (ver `app.json` →
  `ios.bundleIdentifier`).
- **ID de App Store**: dejar **vacío** (solo aplica si ya publicaste en
  App Store).
- **ID de equipo**: dejar **vacío** (solo hace falta si activás la
  verificación de Firebase de abajo).
- Checkbox **"Verificación de aplicaciones de Firebase"**: dejar **sin
  marcar** — no usamos Firebase en este proyecto, no es obligatorio.
- Crear y copiar el **Client ID** (formato `XXXXX-yyyy.apps.googleusercontent.com`).
  Se usa en **dos lugares distintos** — ojo, es fácil olvidarse del segundo:

  1. La parte antes de `.apps.googleusercontent.com` va en `iosUrlScheme`
     del plugin (sección 3):

     ```json
     "iosUrlScheme": "com.googleusercontent.apps.<esa-parte>"
     ```

  2. El Client ID **completo** (con `.apps.googleusercontent.com`) va además
     como `iosClientId` en `GoogleSignin.configure()` (sección 7) y en
     `EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID` (sección 5). Como este proyecto no
     usa Firebase (no hay `GoogleService-Info.plist`), la librería no puede
     inferir el Client ID de iOS solo, y sin este dato falla en runtime con:
     `RNGoogleSignin: failed to determine clientID`.

---

## 2. Instalar el paquete

```bash
npx expo install @react-native-google-signin/google-signin
```

---

## 3. Configurar el plugin nativo en `app.json`

Agregar al array `plugins` (junto a `expo-router`, `expo-notifications`, etc.):

```json
"plugins": [
  "expo-router",
  ["expo-splash-screen", { "backgroundColor": "#208AEF", "image": "./assets/images/splash-icon.png", "imageWidth": 76 }],
  "expo-image",
  "@react-native-vector-icons/lucide",
  "expo-notifications",
  "expo-status-bar",
  [
    "@react-native-google-signin/google-signin",
    { "iosUrlScheme": "com.googleusercontent.apps.<IOS_CLIENT_ID>" }
  ]
]
```

`<IOS_CLIENT_ID>` es la parte numérica del Client ID de iOS creado en el
paso 1 (formato `com.googleusercontent.apps.XXXXX-yyyy`).

---

## 4. Regenerar los proyectos nativos

Como se agregó un módulo nativo, hay que reconstruir:

```bash
npx expo prebuild --clean
npx expo run:ios
npx expo run:android
```

---

## 5. Variables de entorno

**`.env` y `.env.example`:**

```
EXPO_PUBLIC_DRAGON_BALL_API_URL='https://dragonball-api.com/api'
EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID=''
EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID=''
```

`EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID` es el Client ID **completo** de iOS (el
mismo del que sacaste la parte para `iosUrlScheme` en 1.2, pero acá con
`.apps.googleusercontent.com` incluido) — es obligatorio porque el proyecto
no usa `GoogleService-Info.plist`.

**`src/config/env.ts`:**

```ts
import { z } from 'zod';

const envSchema = z.object({
  EXPO_PUBLIC_DRAGON_BALL_API_URL: z.string().url(),
  EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID: z.string().min(1),
  EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID: z.string().min(1),
});

const parsed = envSchema.safeParse({
  EXPO_PUBLIC_DRAGON_BALL_API_URL: process.env.EXPO_PUBLIC_DRAGON_BALL_API_URL,
  EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID,
  EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID:
    process.env.EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID,
});
if (!parsed.success) {
  throw new Error(`Invalid environment variables: \n${parsed.error.message}`);
}

export const env = {
  dragonBallApiUrl: parsed.data.EXPO_PUBLIC_DRAGON_BALL_API_URL,
  googleWebClientId: parsed.data.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID,
  googleIosClientId: parsed.data.EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID,
};
```

---

## 6. Feature `src/features/auth`

Misma estructura que `src/features/favorites`:

```
src/features/auth/
  interfaces/user.interface.ts
  store/useAuth.tsx
  components/GoogleSignInButton/
```

### `interfaces/user.interface.ts`

```ts
export interface User {
  id: string;
  name: string;
  email: string;
  photo: string | null;
}
```

### `store/useAuth.tsx`

Mismo patrón que `useFavoriteStore` (estado + persistencia vía
`LocalStorageAdapter`):

```ts
import { LocalStorageAdapter } from '@/helpers/adapters/local-storage.adapter';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { create } from 'zustand';
import { User } from '../interfaces/user.interface';

interface AuthStore {
  user: User | null;
  isLoading: boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  restoreSession: () => Promise<void>;
}

export const useAuthStore = create<AuthStore>()((set) => ({
  user: null,
  isLoading: false,

  signInWithGoogle: async () => {
    set({ isLoading: true });
    try {
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();
      if (response.type !== 'success') return;

      const user: User = {
        id: response.data.user.id,
        name: response.data.user.name ?? '',
        email: response.data.user.email,
        photo: response.data.user.photo,
      };
      set({ user });
      await LocalStorageAdapter.setItem('auth-user', user);
    } finally {
      set({ isLoading: false });
    }
  },

  signOut: async () => {
    await GoogleSignin.signOut();
    set({ user: null });
    await LocalStorageAdapter.deleteItem('auth-user');
  },

  restoreSession: async () => {
    const stored = await LocalStorageAdapter.getItem<User>('auth-user');
    if (stored && typeof stored === 'object') set({ user: stored });
  },
}));
```

### `components/GoogleSignInButton/index.tsx`

La librería trae el botón **oficial de Google** como componente nativo
(`GoogleSigninButton`) — con el logo y estilo correctos, cumpliendo las
branding guidelines de Google. Se usa en vez de un `BaseButton` genérico:

```tsx
import { useAuthStore } from '@/features/auth/store/useAuth';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';

const GoogleSignInButton = () => {
  const { signInWithGoogle, isLoading } = useAuthStore();

  return (
    <GoogleSigninButton
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Dark}
      onPress={signInWithGoogle}
      disabled={isLoading}
    />
  );
};

export default GoogleSignInButton;
```

`Size` acepta `Icon` / `Standard` / `Wide` (fijan un `width`/`height` fijos,
no responden a `className`/Tailwind por ser vista nativa). `Color` acepta
`Dark` / `Light`.

---

## 7. Configurar el SDK y restaurar sesión al iniciar

En `src/app/_layout.tsx`, junto al `useEffect` que ya carga favoritos:

```ts
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { env } from '@/config/env';
import { useAuthStore } from '@/features/auth/store/useAuth';

GoogleSignin.configure({
  webClientId: env.googleWebClientId,
  iosClientId: env.googleIosClientId,
  offlineAccess: false,
});

// dentro del componente RootLayout:
useEffect(() => {
  useFavoriteStore.getState().loadFavorites();
  useAuthStore.getState().restoreSession();
}, []);
```

> **`iosClientId` es obligatorio acá** (no solo el `webClientId`) porque el
> proyecto no tiene `GoogleService-Info.plist`. Sin este campo, iOS falla en
> runtime con `RNGoogleSignin: failed to determine clientID` apenas se monta
> la app — no es un error del flujo de login, es de la config inicial.

---

## 8. Conectar la UI existente

### `src/app/(drawer)/profile/index.tsx`

Reemplazar el placeholder: si hay `user`, mostrar nombre/foto (con el
componente `Avatar`); si no, mostrar `GoogleSignInButton`.

### `src/shared/components/common/CustomDrawer/index.tsx`

Ya existe el botón "Cerrar sesión" (línea ~92), suelto y sin acción.
Conectarlo:

```tsx
import { useAuthStore } from '@/features/auth/store/useAuth';

// ...
<BaseButton
  text="Cerrar sesión"
  prefixIcon="log-out"
  variant="soft"
  onPress={useAuthStore.getState().signOut}
/>
```

---

## 9. Pendiente por decidir (no implementado en esta guía)

`src/app/index.tsx` redirige directo a `/character` sin pasar por login, y
`useFavoriteStore` guarda todo bajo la key fija `'guest'`. Si el login debe
ser **obligatorio** para entrar a la app, hace falta:

- Gatear `index.tsx` (o el layout del drawer) según `useAuthStore().user`.
- Migrar la key de favoritos de `'guest'` a una por usuario (`user.id`).

Esto es un cambio de flujo más grande — decidir explícitamente antes de
tocarlo.

---

## 10. Checklist rápido

- [ ] 3 Client IDs creados en Google Cloud Console (Web, iOS, Android)
- [ ] SHA-1 de debug (y de release) registrado en Android
- [ ] `@react-native-google-signin/google-signin` instalado
- [ ] Plugin agregado en `app.json` con `iosUrlScheme`
- [ ] `npx expo prebuild --clean` + rebuild iOS/Android
- [ ] `EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID` y `EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID` en `.env` y `.env.example`
- [ ] `env.ts` actualizado (incluye `googleIosClientId`)
- [ ] `features/auth` (interface, store, botón) creado
- [ ] `GoogleSignin.configure()` + `restoreSession()` en `_layout.tsx`
- [ ] `profile/index.tsx` conectado
- [ ] Botón "Cerrar sesión" del `CustomDrawer` conectado

---

## Apéndice: usando `react-native-nitro-google-signin`

Esta es la **Opción B** de la sección 0. Los pasos 1 (Google Cloud Console),
4 (rebuild), 5 (variables de entorno), 8 y 9 (UI, pendientes) **no cambian**.
Lo que cambia es la instalación, el plugin y el código del store.

### Instalar

Además de la librería, esta necesita `react-native-nitro-modules` (es la base
de la arquitectura Nitro/JSI) y `expo-dev-client`:

```bash
npx expo install react-native-nitro-google-signin react-native-nitro-modules expo-dev-client
```

### Plugin en `app.json`

Como este proyecto no usa Firebase (no hay `google-services.json` /
`GoogleService-Info.plist`), se configura con `iosUrlScheme`, igual que en
la Opción A:

```json
"plugins": [
  "expo-router",
  ["expo-splash-screen", { "backgroundColor": "#208AEF", "image": "./assets/images/splash-icon.png", "imageWidth": 76 }],
  "expo-image",
  "@react-native-vector-icons/lucide",
  "expo-notifications",
  "expo-status-bar",
  [
    "react-native-nitro-google-signin",
    { "iosUrlScheme": "com.googleusercontent.apps.<IOS_CLIENT_ID>" }
  ]
]
```

Después: `npx expo prebuild --clean` + rebuild iOS/Android (paso 4).

### `store/useAuth.tsx` (versión Nitro)

La API es distinta: el objeto exportado es `GoogleOneTapSignIn` (no
`GoogleSignin`), y el flujo de sign-in intenta primero "one tap", después
`createAccount`, y como último recurso un picker explícito
(`presentExplicitSignIn`) — reemplaza el bloque `signInWithGoogle` de la
Opción A por esto:

```ts
import { LocalStorageAdapter } from '@/helpers/adapters/local-storage.adapter';
import {
  GoogleOneTapSignIn,
  isNoSavedCredentialFoundResponse,
  isSuccessResponse,
} from 'react-native-nitro-google-signin';
import { create } from 'zustand';
import { User } from '../interfaces/user.interface';

interface AuthStore {
  user: User | null;
  isLoading: boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  restoreSession: () => Promise<void>;
}

export const useAuthStore = create<AuthStore>()((set) => ({
  user: null,
  isLoading: false,

  signInWithGoogle: async () => {
    set({ isLoading: true });
    try {
      await GoogleOneTapSignIn.checkPlayServices();

      let response = await GoogleOneTapSignIn.signIn();
      if (isNoSavedCredentialFoundResponse(response)) {
        response = await GoogleOneTapSignIn.createAccount();
      }
      if (isNoSavedCredentialFoundResponse(response)) {
        response = await GoogleOneTapSignIn.presentExplicitSignIn();
      }
      if (!isSuccessResponse(response)) return;

      const { user: googleUser } = response.data;
      const user: User = {
        id: googleUser.id,
        name: googleUser.name ?? '',
        email: googleUser.email,
        photo: googleUser.photo ?? null,
      };
      set({ user });
      await LocalStorageAdapter.setItem('auth-user', user);
    } finally {
      set({ isLoading: false });
    }
  },

  signOut: async () => {
    await GoogleOneTapSignIn.signOut();
    set({ user: null });
    await LocalStorageAdapter.deleteItem('auth-user');
  },

  restoreSession: async () => {
    const stored = await LocalStorageAdapter.getItem<User>('auth-user');
    if (stored && typeof stored === 'object') set({ user: stored });
  },
}));
```

> Verificar contra la [referencia de API](https://react-native-nitro-google-sign-in.github.io/docs/guide/api-reference)
> los nombres exactos de los campos de `googleUser` (`id`/`name`/`email`/`photo`)
> al momento de implementar — es una librería nueva y su superficie puede
> cambiar entre versiones.

### `_layout.tsx` (versión Nitro)

Reemplaza el `GoogleSignin.configure(...)` del paso 7:

```ts
import { GoogleOneTapSignIn } from 'react-native-nitro-google-signin';
import { useAuthStore } from '@/features/auth/store/useAuth';

GoogleOneTapSignIn.configure({ webClientId: env.googleWebClientId });
// probable que también necesite iosClientId: env.googleIosClientId sin
// GoogleService-Info.plist — mismo problema que en la Opción A (ver sección
// 7), verificar contra la API reference de esta librería al implementar.

useEffect(() => {
  useFavoriteStore.getState().loadFavorites();
  useAuthStore.getState().restoreSession();
}, []);
```

El resto (`GoogleSignInButton`, `profile/index.tsx`, el botón "Cerrar
sesión" del `CustomDrawer`) queda igual — solo cambia de dónde importan
`useAuthStore`, y ese archivo ya quedó resuelto arriba.
