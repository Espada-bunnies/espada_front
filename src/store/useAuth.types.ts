interface T_registrationProps {
  username: string;
  password: string;
  email: string;
}
type T_registrationHandler = (attrs: T_registrationProps) => { jwt: string; refresh: string };

interface T_loginProps {
  usernameEmail: string;
  password: string;
}

type T_loginHandler = (attrs: T_loginProps) => { jwt: string; refresh: string };

interface useAuth_store {
  jwt: string;
  refresh: string;
  isLogin: boolean;
  userData: {
    name: string;
  };
  registration: (attrs: T_registrationProps) => void;
  login: (attrs: T_loginProps) => void;
}

export type { T_loginHandler, T_registrationHandler, useAuth_store };
