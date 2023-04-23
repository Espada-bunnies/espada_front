import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import login from '@/store/login';
import registration from '@/store/registration';
import { useAuth_store } from '@/store/useAuth.types';

const useAuth = create<useAuth_store>()(
  persist(
    (set) => ({
      jwt: '',
      refresh: '',
      isLogin: false,
      userData: {
        name: 'Александр Мелихов',
      },
      registration: (attrs) => {
        const { jwt, refresh } = registration(attrs);
        set({ jwt, refresh });
      },
      login: (attrs) => {
        const { jwt, refresh } = login(attrs);
        set({ jwt, refresh });
      },
    }),
    {
      name: 'EspadaData',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ jwt: state.jwt, refresh: state.refresh, isLogin: state.isLogin }),
    },
  ),
);

export default useAuth;
