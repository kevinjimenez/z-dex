import { useAuthStore } from '@/features/auth/store/useAuth';
import BaseButton from '@/shared/components/ui/BaseButton';

const GoogleSignInButton = () => {
  const { signInWithGoogle, isLoading } = useAuthStore();

  return (
    <BaseButton
      text="Continuar con Google"
      prefixIcon="log-in"
      variant="contained"
      color="primary"
      onPress={signInWithGoogle}
      disabled={isLoading}
    />
  );
};

export default GoogleSignInButton;
