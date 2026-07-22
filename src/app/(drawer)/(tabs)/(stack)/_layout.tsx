import { Stack } from 'expo-router';

const CharactersLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="characters/index" />
      <Stack.Screen
        name="detail/[id]"
        options={{
          presentation: 'fullScreenModal',
        }}
      />
    </Stack>
  );
};

export default CharactersLayout;
