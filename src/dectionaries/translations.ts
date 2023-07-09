const dictionaries = {
  en: () => import('./ru.json').then((module) => module.default),
  ru: () => import('./ru.json').then((module) => module.default),
};

type Langs = keyof typeof dictionaries;

export interface I_authForm {
  registerTitle: string;
  loginTitle: string;
  username: string;
  password: string;
  confirm_password: string;
  email: string;
  alreadyHaveAccount: string;
  dontHaveAccount: string;
  refreshPassword: string;
  singIn: string;
  singUp: string;
}

export interface I_globalData {
  authForm: I_authForm;
}

const getDictionary = async (locale: Langs): Promise<I_globalData> => dictionaries[locale]();

export type { Langs };
export { getDictionary };
