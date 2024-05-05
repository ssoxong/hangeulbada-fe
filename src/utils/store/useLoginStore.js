import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useLoginState = create(
  persist((set) => ({
    isLogin : false,
    setLogin: (state) => set({ isLogin: state }),
  }),
  {
    name: 'isLoggedIn',
  },
  )
);
