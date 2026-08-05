import { useAuthStore } from '@/features/auth/store/useAuth';
import { Pressable, Text } from 'react-native';
import GoogleLogo from './GoogleLogo';

const GoogleSignInButtonCustom = () => {
  const { signInWithGoogle, isLoading } = useAuthStore();

  return (
    <Pressable
      className="w-full p-4 rounded-xl justify-center items-center flex-row gap-x-3 bg-white border border-slate-200"
      disabled={isLoading}
      onPress={signInWithGoogle}
    >
      <GoogleLogo />
      <Text className="text-center font-dmsans-bold text-ink-primary">
        Continuar con Google
      </Text>
    </Pressable>
  );
};

export default GoogleSignInButtonCustom;
