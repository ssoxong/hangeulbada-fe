import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useLoginState = create(
  persist((set) => ({
    isLogin : false,
    setLogin: (state) => set({ isLogin: state }),
  }),
  {
    name: 'loginStore',
  },
  )
);

export const useOAuthState = create(
  persist((set) => ({
    cid : null,
    name : null,
    email : null,
    role : null,
    setCid: (state) => set({ cid: state }),
    setName: (state) => set({ name: state }),
    setEmail: (state) => set({ email: state }),
    setRole: (state) => set({ role: state }),
  }),
  {
    name: 'userDataStore'
  }
  )
)