import { Stack } from 'expo-router';

const CharactersLayout = () => {
  return (
    <Stack
      screenOptions={{
        // title: 'stack',
        headerShown: false,
        // headerShadowVisible: false,
        // contentStyle: {
        //   backgroundColor: 'white',
        // },
        // headerLeft: ({ tintColor, canGoBack }) => (
        //   <Ionicons
        //     name={canGoBack ? 'arrow-back-outline' : 'grid-outline'}
        //     className="mr-5"
        //     size={20}
        //     onPress={() => onHeaderLeftClick(canGoBack)}
        //   />
        // ),
      }}
    >
      <Stack.Screen
        name="index"
        options={
          {
            // headerShown: false,
            // title: 'Inicio stack',
          }
        }
      />
    </Stack>
  );
};

export default CharactersLayout;
