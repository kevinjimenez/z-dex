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
