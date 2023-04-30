export interface IFormField {
    value: string;
    isValid: boolean | null;
}

export interface IUser {
    login: IFormField;
    password: IFormField;
    passwordRepeat: IFormField;
    email: IFormField;
}