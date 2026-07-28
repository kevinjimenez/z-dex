import { Stack } from 'expo-router';

const PlanetLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen
        name="detail/[id]"
        options={{
          presentation: 'fullScreenModal',
        }}
      />
    </Stack>
  );
};

export default PlanetLayout;
