import { CharacterResponse } from '@/core/interfaces/responses/character-response.interface';
import { LocalStorageAdapter } from '@/helpers/adapters/local-storage.adapter';
import { create } from 'zustand';

interface FavoriteStore {
  favorites: CharacterResponse[];
  isFavorite: (id: number) => boolean;
  addFavorite: (character: CharacterResponse) => void;
  removeFavorite: (id: number) => void;
  toggleFavorite: (character: CharacterResponse) => void;
  loadFavorites: () => Promise<void>;
}

export const useFavoriteStore = create<FavoriteStore>()((set, get) => ({
  favorites: [],
  isFavorite: (id) => {
    return get().favorites.some((character) => character.id === id);
  },
  addFavorite: (character) => {
    const newFavorites = [...get().favorites, character];
    set({ favorites: newFavorites });
    LocalStorageAdapter.setItem('guest', newFavorites);
  },
  removeFavorite: (id) => {
    const newFavorites = get().favorites.filter(
      (character) => character.id !== id,
    );
    set({ favorites: newFavorites });
    LocalStorageAdapter.setItem('guest', newFavorites);
  },
  toggleFavorite: (character) => {
    const exists = get().isFavorite(character.id);
    const newFavorites = exists
      ? get().favorites.filter((c) => c.id !== character.id)
      : [...get().favorites, character];
    set({ favorites: newFavorites });
    LocalStorageAdapter.setItem('guest', newFavorites);
  },

  loadFavorites: async () => {
    const stored =
      await LocalStorageAdapter.getItem<CharacterResponse[]>('guest');
    set({ favorites: Array.isArray(stored) ? stored : [] });
  },
}));
