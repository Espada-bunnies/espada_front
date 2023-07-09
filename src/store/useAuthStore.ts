'use client';

import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import api from '@/api';

type Register = ({
  username,
  password,
  confirm_password,
  email,
}: {
  username: string;
  password: string;
  confirm_password: string;
  email: string;
}) => void;
type Login = ({ username, password }: { username: string; password: string }) => void;

interface AuthStore {
  access_token: string;
  refresh_token: string;
  register: Register;
  login: Login;
  authCheck: () => boolean;
}

const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      access_token: '',
      refresh_token: '',
      register: (registerInfo) => {
        const bodyData = new FormData();

        (Object.keys(registerInfo) as Array<keyof typeof registerInfo>).forEach((key) => {
          bodyData.set(key, registerInfo[key]);
        });

        api.register(bodyData).then((tokens) => {
          set({ access_token: tokens.access_token, refresh_token: tokens.refresh_token });
        });
      },
      login: (loginInfo) => {
        const bodyData = new FormData();

        (Object.keys(loginInfo) as Array<keyof typeof loginInfo>).forEach((key) => {
          bodyData.set(key, loginInfo[key]);
        });

        api.login(bodyData).then((tokens) => {
          set({ access_token: tokens.access_token, refresh_token: tokens.refresh_token });
        });
      },
      authCheck: () => {
        const state = get();
        return state.access_token !== '' && state.refresh_token !== '';
      },
    }),
    {
      name: 'ESPADA_AUTH_STORE',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ access_token: state.access_token, refresh_token: state.refresh_token }),
    },
  ),
);

export default useAuthStore;
