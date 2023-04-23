import { T_registrationHandler } from '@/store/useAuth.types';

const registration: T_registrationHandler = () => {
  return { jwt: '', refresh: '' };
};

export default registration;
