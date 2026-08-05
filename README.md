# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

### Íconos

Los íconos se instalan por familia desde [`@react-native-vector-icons`](https://github.com/oblador/react-native-vector-icons) (el reemplazo recomendado del ya deprecado `@expo/vector-icons`), no como un paquete único que trae todo.

**Familia usada en este proyecto: Lucide** (`@react-native-vector-icons/lucide`). Es la que consumen `BaseButton`, `BaseButtonIcon`, `BaseBadge`, `LabelIcon`, el Drawer, etc.

Para agregar otra familia (ejemplo, Ionicons):

```bash
bun add @react-native-vector-icons/ionicons
```

Para quitar una:

```bash
bun remove @react-native-vector-icons/ionicons
```

Otras familias disponibles: `material-icons`, `fontawesome6` (ojo: esta necesita además la prop `iconStyle="solid" | "regular" | "brand"` en cada ícono, a diferencia de Lucide/Ionicons), `feather`, `font-awesome`, etc. Ver la lista completa en [npm](https://www.npmjs.com/search?q=%40react-native-vector-icons).

Cada familia nueva que agregues hay que sumarla también al array `plugins` de `app.json` (así Expo linkea la fuente al build nativo — no alcanza con instalar el paquete):

```json
"plugins": [
  ...,
  "@react-native-vector-icons/lucide"
]
```

#### Color de los íconos (vía className)

Los componentes de este proyecto (`BaseButton`, `BaseButtonIcon`, etc.) pintan los íconos de Lucide con **clases de Tailwind**, no con un color crudo (`color="red"` o `color="#FF0000"`):

```tsx
<BaseButtonIcon icon="heart" color="text-primary" />
```

Esto funciona porque en `src/app/_layout.tsx` se registra `cssInterop(Lucide, { className: 'style' })`, que le enseña a NativeWind a traducir el `className` del ícono a su `style` (y de ahí al `color` real). Por eso el valor de `color`/`className` debe ser una clase de texto válida (`text-primary`, `text-white`, `text-ink`, etc.), tomada de los colores definidos en `tailwind.config.js` (`primary`, `secondary`, `ink`, `muted`, `surface`, `frame`, `badge`, `border`, `line`), no un string de color libre.

### Gradientes

`expo-linear-gradient` solo hace degradados **lineales** (una línea recta, no radiales) — la dirección se controla con `start`/`end`, dos puntos en un plano fraccional de `0` a `1` relativo al tamaño de la caja (no importa si mide 50px o 500px). `x` crece hacia la derecha, `y` crece hacia abajo (como en pantalla):

```
        x: 0 ─────────────── x: 1
      ┌─────────────────────────┐
y: 0  │ (0,0)             (1,0) │
      │  ╲                 ╱    │
      │   ╲               ╱     │
      │    (0.5, 0.5) centro    │
      │   ╱               ╲     │
      │  ╱                 ╲    │
y: 1  │ (0,1)             (1,1) │
      └─────────────────────────┘
```

Ejemplos:
- `{x:0,y:0} → {x:0,y:1}` = de arriba a abajo (vertical, el default si no pasás `start`/`end`)
- `{x:0,y:0} → {x:1,y:0}` = de izquierda a derecha (horizontal)
- `{x:1,y:0} → {x:0.5,y:0.5}` = desde la esquina superior-derecha hacia el centro (diagonal)

`start` es dónde "empieza" el primer color del array `colors`, `end` es dónde termina el último — lo que quede fuera de ese segmento se rellena con el color del extremo más cercano.

**Ojo con `'transparent'`**: es literalmente `rgba(0,0,0,0)` (negro con alpha 0). Si lo mezclás con un color en el medio del degradado, el motor interpola RGB y alpha por separado, y aparece una línea/banda oscura visible en la transición. Usá la versión transparente del mismo color en vez de `'transparent'`:

```tsx
// mal — puede salir una línea oscura en el medio
colors={['transparent', 'rgba(251,243,233,0.6)', '#FBF3E9']}

// bien — mismo RGB en los 3 stops, solo cambia el alpha
colors={['rgba(251,243,233,0)', 'rgba(251,243,233,0.6)', '#FBF3E9']}
```

Si necesitás un degradado **radial** (que irradie desde un punto, no en línea recta), `expo-linear-gradient` no lo soporta — hace falta `react-native-svg` con su `<RadialGradient>`.

### Organización de componentes

Cuando un componente tiene "átomos" internos que solo él usa, se puede agrupar en una carpeta con `index.tsx`:

```
CharacterPoster/
  index.tsx          (el componente, se importa como './CharacterPoster')
  CharacterTitle.tsx (átomo privado, solo lo usa CharacterPoster)
```

**Usarlo selectivamente, no para todo** — el criterio es el mismo que para decidir si algo va en `shared/` o en `features/`: ¿es privado de un solo componente, o se reusa en más de un lugar?

- **Sí conviene la carpeta**: cuando el/los átomo(s) son exclusivamente privados de ese componente y no se van a reusar en ningún otro lado.
- **No conviene**: para piezas que ya se comparten entre varios padres (ej. `CharacterAvatar`, que usan tanto `CharacterCard` como `CharacterPoster`; o `StatCard`/`ListSkeleton`, genéricos en `shared/`). Meterlas dentro de la carpeta de un componente específico sugiere falsamente que son privadas de ese componente.

### Formularios (Formik + Zod)

Los formularios de este proyecto combinan **Formik** (estado del form: `values`, `touched`, `errors`, `handleChange`, `handleSubmit`) con **Zod** (definir el schema de validación y sacar el tipo TS del form) — no se valida a mano dentro de Formik.

El puente entre los dos es `createFormValidator` (`src/utils/create-form-validator.ts`): toma un schema de Zod y devuelve una función compatible con la prop `validate` de Formik, convirtiendo el formato de errores de Zod (`error.flatten().fieldErrors`) al formato plano que espera Formik (`{ campo: mensaje }`).

Ejemplo real, `src/features/auth/schemas/login.schema.ts`:

```ts
import { createFormValidator } from '@/utils/create-form-validator';
import z from 'zod';

export const loginSchema = z.object({
  username: z.string().min(1, 'El username es requerido'),
  password: z.string().min(1, 'El password es requerido'),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

export const validateLogin = createFormValidator(loginSchema);
```

Y el uso en la pantalla (`src/app/auth/login/index.tsx`):

```tsx
<Formik
  initialValues={{ username: '', password: '' }}
  validate={validateLogin}
  onSubmit={onSubmit}
>
  {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
    // inputs con value={values.x} onChangeText={handleChange('x')} onBlur={handleBlur('x')}
    // <BaseButton onPress={() => handleSubmit()} />
  )}
</Formik>
```

**Ojo con el botón de submit**: hay que pasarle `() => handleSubmit()` (el `handleSubmit` que da Formik), no tu propio `onSubmit` directo — `onSubmit` espera los valores del form (`{ username, password }`), mientras que el `onPress` de un botón espera un evento de touch; son firmas incompatibles y Formik es quien conecta ambos (valida y recién después llama a tu `onSubmit` con los valores).

Para un formulario nuevo: creá su schema con Zod en `features/<feature>/schemas/`, envolvelo con `createFormValidator`, y listo — no hace falta reinventar la validación por formulario.

### Login con Google (SHA-1 en Android)

El punto que suele trabar a cada dev nuevo: **Android valida el login contra el certificado con el que se firmó el build (SHA-1)**, y ese `debug.keystore` es local a cada máquina (`android/` está en `.gitignore`, no se comparte vía git). Por eso, si querés que el login con Google funcione en tus builds de debug, tenés que generar y registrar **tu propio SHA-1**:

```bash
keytool -list -v -keystore android/app/debug.keystore \
  -alias androiddebugkey -storepass android -keypass android
```

Copiá el valor de `SHA1:` y agregalo como huella al OAuth Client ID de tipo **Android** en Google Cloud Console (se pueden registrar varios SHA-1, uno por dev). Sin este paso, el login falla con `DEVELOPER_ERROR` aunque el código esté bien.

Para **producción** es un keystore aparte (el de release, no el de debug), con su propio SHA-1:

```bash
keytool -list -v -keystore my-release-key.keystore -alias zdex-release
```

(pide la contraseña del keystore de release, a diferencia del de debug que usa `android`/`android` fijos). Y si usás Play App Signing, el SHA-1 real que hay que registrar es el que aparece en Play Console → Integridad de la app → Certificado de la clave de firma de la app, no el de tu keystore local.

📄 Guía completa paso a paso (Google Cloud Console, `app.json`, feature `auth`, UI): [`GOOGLE_LOGIN.md`](./GOOGLE_LOGIN.md).

En **iOS** no aplica nada de esto: Google solo valida el Bundle ID, no hay certificado de firma de por medio.

### Navegación raíz (`Stack`, no `Slot`)

`src/app/_layout.tsx` envuelve las rutas con `<Stack screenOptions={{ headerShown: false, animation: 'fade' }} />`, no con `<Slot />`. La diferencia importa:

- **`Slot`** es un passthrough puro — renderiza lo que matchee sin navigator de por medio: cero animaciones, cero historial, cero gestos de swipe-back.
- **`Stack`** agrega un navigator de verdad (historial, transición animada, swipe-back en iOS). Es el default que trae el template de Expo Router, no `Slot` — `Slot` se reserva para casos donde genuinamente no querés nada de eso (ej. un layout que solo envuelve providers).

Como `(drawer)` ya tiene su propio `Drawer` navigator anidado adentro, apilar un `Stack` en la raíz es el patrón estándar de Expo Router (`Stack > Drawer > Tabs`). Antes de este cambio, pasar de `/auth/login` a `(drawer)` (o el logout de vuelta) se sentía como un corte seco — con `Stack` + `animation: 'fade'` ahora anima.

Valores de `animation` disponibles además de `'fade'`: `'slide_from_right'` (como un push de stack normal), `'slide_from_bottom'` (estilo modal), `'fade_from_bottom'` (mezcla de las dos). Se puede diferenciar por pantalla si querés, por ejemplo, que el logout anime distinto al login.

**Ojo con `Stack`**: habilita swipe-back en iOS entre pantallas de nivel raíz. No afecta mientras login/logout usen `router.replace` (no dejan la pantalla anterior en el historial) — si en algún punto se cambia a `router.push` entre `/auth/login` y el resto de la app, sí podría dejar un swipe-back accediendo a una pantalla que no debería ser alcanzable.

### Bug de NativeWind: `focus:` pisa el `style` en Android (`BaseInput`)

Si un `TextInput` (u otro componente) combina variantes `focus:`/`hover:`/`active:` de NativeWind en el `className` **con** un `style` explícito (o clases estáticas condicionadas por props, como `pl-11` cuando hay un ícono), en Android el resultado puede fallar solo **mientras el campo tiene foco** — el padding/color/border que dependían de `style` desaparecen apenas se toca el campo, y vuelven a verse bien al perder el foco.

**Causa**: NativeWind (v4) implementa `focus:*` escuchando el evento de foco y recalculando el `style` final del componente en runtime. Ese recálculo interno termina pisando cualquier `style` pasado explícitamente desde afuera, no solo las clases estáticas — probamos moviendo el padding de `className` (`pl-11`) a `style` directo, y igual se rompía al enfocar, lo que confirmó que el problema no era "NativeWind no genera la clase" sino que **NativeWind gana la pulseada contra el `style` una vez que hay foco**.

**Fix aplicado en `BaseInput`** (`src/shared/components/ui/BaseInput/index.tsx`): sacar las variantes `focus:*` del `className` por completo, y manejar el estado de foco a mano con `useState` + `onFocus`/`onBlur` propios (encadenando los que vengan por props, ej. el `onBlur` de Formik). Border, fondo, color de texto y padding se calculan en JS según ese estado y se aplican siempre vía `style` — sin `focus:` en el `className`, NativeWind no tiene motivo para interceptar el ciclo de foco de ese input.

```tsx
const [isFocused, setIsFocused] = useState(false);

const handleFocus = (e: FocusEvent) => {
  setIsFocused(true);
  onFocus?.(e);
};
const handleBlur = (e: BlurEvent) => {
  setIsFocused(false);
  onBlur?.(e);
};

// ...
<TextInput
  className={twMerge('border rounded-xl p-4', classInput)} // sin focus:*
  onFocus={handleFocus}
  onBlur={handleBlur}
  style={[
    {
      paddingLeft: prefixIcon ? 44 : undefined,
      paddingRight: suffixIcon ? 44 : undefined,
      borderColor: isFocused ? '#b0ada6' : '#e4e2de',
      backgroundColor: isFocused ? '#ffffff' : 'transparent',
      color: isFocused ? '#242320' : undefined,
    },
    style,
  ]}
  {...props}
/>
```

**Si aparece algo parecido en otro `Base*` component**: mismo síntoma (algo que depende de `style`/props deja de aplicarse solo al interactuar) → sospechar primero de mezclar `focus:`/`hover:`/`active:` de NativeWind con `style` explícito, no de z-index/orden de renderizado/elevation (todo eso lo probamos primero y no era la causa real).

### Other setup steps

- To set up ESLint for linting, run `npx expo lint`, or follow our guide on ["Using ESLint and Prettier"](https://docs.expo.dev/guides/using-eslint/)
- If you'd like to set up unit testing, follow our guide on ["Unit Testing with Jest"](https://docs.expo.dev/develop/unit-testing/)
- Learn more about the TypeScript setup in this template in our guide on ["Using TypeScript"](https://docs.expo.dev/guides/typescript/)

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
