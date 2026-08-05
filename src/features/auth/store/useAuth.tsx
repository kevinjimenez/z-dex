import { LocalStorageAdapter } from '@/helpers/adapters/local-storage.adapter';
import {
  GoogleSignin,
  isSuccessResponse,
} from '@react-native-google-signin/google-signin';
import { create } from 'zustand';
import { User } from '../interfaces/user.interface';

interface AuthStore {
  user: User | null;
  isLoading: boolean;

  signIn: (username: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  restoreSession: () => Promise<void>;
  getUsername: () => string;
  getAvatar: () => string;
}

export const useAuthStore = create<AuthStore>()((set, get) => ({
  user: null,
  isLoading: false,

  signIn: async (username: string) => {
    set({ isLoading: true });
    try {
      const user: User = {
        id: '',
        name: username,
        email: '',
        photo: null,
      };
      set({ user });
      await LocalStorageAdapter.setItem('auth-user', user);
    } finally {
      set({ isLoading: false });
    }
  },

  signInWithGoogle: async () => {
    set({ isLoading: true });
    try {
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();
      if (!isSuccessResponse(response)) return;

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
    const userId = get().user?.id;
    if (userId !== '') {
      await GoogleSignin.signOut();
    }
    set({ user: null });
    await LocalStorageAdapter.deleteItem('auth-user');
  },

  restoreSession: async () => {
    const stored = await LocalStorageAdapter.getItem<User>('auth-user');
    if (stored && typeof stored === 'object') set({ user: stored });
  },

  getAvatar: () => get().user?.name.at(0) ?? '',

  getUsername: () =>
    `@${get().user?.name.toLocaleLowerCase().split(' ').join('')}`,
}));
