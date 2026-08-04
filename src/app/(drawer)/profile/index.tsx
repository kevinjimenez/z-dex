import { useAuthStore } from '@/features/auth/store/useAuth';
import DrawerMenuButton from '@/shared/components/common/CustomDrawerMenuButton';
import GoogleSignInButtonCustom from '@/shared/components/common/GoogleSignInButtonCustom';
import ScreenContainer from '@/shared/components/common/ScreenContainer';
import BaseButton from '@/shared/components/ui/BaseButton';
import { Image } from 'expo-image';
import { Text, View } from 'react-native';

const ProfileScreen = () => {
  const { user, signOut } = useAuthStore();

  return (
    <ScreenContainer>
      <DrawerMenuButton />

      <View className="flex-1 justify-center items-center gap-y-6 px-6">
        {user ? (
          <>
            {user.photo && (
              <Image
                source={{ uri: user.photo }}
                style={{ width: 96, height: 96, borderRadius: 48 }}
              />
            )}
            <View className="items-center gap-y-1">
              <Text className="text-ink-primary font-oswald-semibold text-2xl">
                {user.name}
              </Text>
              <Text className="text-ink-terceary font-dmsans-regular text-sm">
                {user.email}
              </Text>
            </View>
            <BaseButton
              text="Cerrar sesión"
              prefixIcon="log-out"
              variant="soft"
              onPress={signOut}
            />
          </>
        ) : (
          <>
            <Text className="text-ink-primary font-oswald-semibold text-2xl">
              No iniciaste sesión
            </Text>
            <View className="w-full gap-y-4">
              <View className="gap-y-2">
                <Text className="text-ink-terceary font-dmsans-regular text-xs">
                  Custom (BaseButton + logo)
                </Text>
                <GoogleSignInButtonCustom />
              </View>
            </View>
          </>
        )}
      </View>
    </ScreenContainer>
  );
};

export default ProfileScreen;
