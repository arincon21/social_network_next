import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserState {
  isAuthenticated: boolean;
  username: string | null;
}

interface UserActions {
  login: (username: string) => void;
  logout: () => void;
}

const initialState: UserState = {
  isAuthenticated: false,
  username: null,
};

export const useUserStore = create<UserState & UserActions>()(
  persist(
    (set) => ({
      ...initialState,
      login: (username) => set({ isAuthenticated: true, username }),
      logout: () => set(initialState),
    }),
    {
      name: 'user-auth', // key única para el localStorage
    }
  )
);