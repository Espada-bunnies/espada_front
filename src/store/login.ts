import { T_loginHandler } from '@/store/useAuth.types';

const login: T_loginHandler = () => {
  return { jwt: '', refresh: '' };
};

export default login;
