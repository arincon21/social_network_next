
import { create } from 'zustand';

interface UserState {
  isAuthenticated: boolean;
  username: string | null;
  login: (username: string) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  isAuthenticated: false,
  username: null,
  login: (username) => set({ isAuthenticated: true, username }),
  logout: () => set({ isAuthenticated: false, username: null }),
}));
