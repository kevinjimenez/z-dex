import { useAuthStore } from '@/features/auth/store/useAuth';
import DrawerMenuButton from '@/shared/components/common/CustomDrawerMenuButton';
import ScreenContainer from '@/shared/components/common/ScreenContainer';

const ProfileScreen = () => {
  const { user, signOut } = useAuthStore();

  return (
    <ScreenContainer>
      <DrawerMenuButton />
    </ScreenContainer>
  );
};

export default ProfileScreen;
