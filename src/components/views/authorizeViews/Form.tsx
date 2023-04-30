import FormInput from '@/components/UI/input/formInput/FormInput';
import { IFormField } from '@/pages/authorize/authorize.types';
import React, { FC, useEffect, useState } from 'react'

const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;



interface formProps {
  pageType: string;
  changeUser: (param1: IFormField, param2: IFormField, param3: IFormField, param4: IFormField) => void;
}

interface formArr {
  placeholder: string;
  value: string
  onChange: (str:string) => void;
  status: boolean | null;
  label: string;
  types: string[];
  type?: string;
}

const Form: FC<formProps> = ({ pageType, changeUser }) => {



  const [login, setLogin] = useState<IFormField>({ value: '', isValid: null });
  const [password, setPassword] = useState<IFormField>({ value: '', isValid: null });
  const [passwordRepeat, setPasswordRepeat] = useState<IFormField>({ value: '', isValid: null });
  const [email, setEmail] = useState<IFormField>({ value: '', isValid: null });

  useEffect(() => {
    changeUser(login, password, passwordRepeat, email)
  }, [login, password, passwordRepeat, email])

  const fields: formArr[] = [
      {
          placeholder: 'Логин',
          value: login.value,
          onChange: (str: string) => changeFields(str, 'login'),
          status: login.isValid,
          label: 'Такого пользователя не существует',
          types: ['registration', 'login'],
      },
      {
          placeholder: 'Пароль',
          value: password.value,
          onChange: (str: string) => changeFields(str, 'password'),
          status: password.isValid,
          label: 'Неверный пароль',
          types: ['registration', 'login', 'newPassword'],
          type: 'password',
        },
        {
          placeholder: 'Повторите пароль',
          value: passwordRepeat.value,
          onChange: (str: string) => changeFields(str, 'passwordRepeat'),
          status: passwordRepeat.isValid,
          label: 'Пароли не совпадают',
          types: ['registration', 'newPassword'],
          type: 'password',
        },
        {
          placeholder: 'E-mail',
          value: email.value,
          onChange: (str: string) => changeFields(str, 'email'),
          status: email.isValid,
          label: 'Неверный email',
          types: ['registration', 'forgotPassword'],
          type: 'email',
        },
  ]

  const changeFields = (value: string, type: string) => {
      switch (type) {
        case 'login': {
          const valid = value === '' ? null : value !== 'Alex';
          setLogin({ value: value, isValid: valid });
          break;
        }
        case 'password': {
          const valid = value === '' ? null : value !== '1';
          setPassword({ value: value, isValid: valid });
          break;
        }
        case 'passwordRepeat': {
          const valid = value === password.value;
          setPasswordRepeat({ value, isValid: valid });
          break;
        }
        case 'email': {
          const valid = emailRegExp.test(value);
          setEmail({ value, isValid: valid });
          break;
        }
      }
    }

    return (
        <>
        {fields.map((field, index) => {
            if (field.types.filter((f) => f === pageType).length === 0) {
            return null;
            }

            return (
              <FormInput
                key={field.placeholder + index}
                // className={styles.widthInput}
                placeholder={field.placeholder}
                value={field.value}
                onChange={field.onChange}
                status={field.status}
                label={field.label}
                type={field.type === null ? 'text' : field.type}
              />
            )
        })}
        </>
    )
}

export default Form