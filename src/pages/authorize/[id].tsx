import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import MainLogo from '@/assets/icons/logo.svg';
import FormButton from '@/components/ui/button/formButton/FormButton';
import FormInput from '@/components/ui/input/formInput/FormInput';
import registration from '@/store/registration';

import styles from './Authorize.module.scss';

interface formField {
  value: string;
  isValid: boolean | null;
}

const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const AuthorizeSubPage = () => {
  const [login, setLogin] = useState<formField>({ value: '', isValid: null });
  const [password, setPassword] = useState<formField>({ value: '', isValid: null });
  const [passwordRepeat, setPasswordRepeat] = useState<formField>({ value: '', isValid: null });
  const [email, setEmail] = useState<formField>({ value: '', isValid: null });

  const [pageType, setPageType] = useState<string>('login');

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
  };

  const router = useRouter();

  useEffect(() => {
    if (router.query.id !== undefined) {
      setPageType(router.query.id as string);
    }
  }, [router]);

  const submitFormHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    switch (pageType) {
      case 'login': {
        if (login.isValid && password.isValid) {
          //post request
          console.log(JSON.stringify({ login: login.value, password: password.value }));
        }
        break;
      }
      case 'registration': {
        if (login.isValid && password.isValid && passwordRepeat.isValid && email.isValid) {
          //post request
          console.log(JSON.stringify({ login: login.value, password: password.value, email: email.value }));
        }
        break;
      }
    }
  };

  const fields = [
    {
      placeholder: 'Логин',
      value: login.value,
      onChange: (str: string) => changeFields(str, 'login'),
      status: login.isValid,
      label: 'Такого пользователя не существует',
      types: ['login'],
    },
  ];

  return (
    <div>
      {fields.map((field, index) => {
        if (field.types.filter((f) => f === pageType).length === 0) {
          return null;
        }

        return (
          <FormInput
            key={field.placeholder + index}
            className={styles.widthInput}
            placeholder={'Логин'}
            value={login.value}
            onChange={(str) => changeFields(str, 'login')}
            status={login.isValid}
            label={'Такого пользователя не существует'}
          />
        );
      })}

      <div className={styles.authorize_page}>
        <div>
          <div className={styles.logo_wrapper}>
            <Link href="/">
              <MainLogo className={styles.logo} />
            </Link>
          </div>

          <form className={styles.form} onSubmit={submitFormHandler}>
            {pageType === 'registration' ? (
              <h1 className={styles.form_title}>Регистрация аккаунта</h1>
            ) : pageType === 'login' ? (
              <h1 className={styles.form_title}>Вход в аккаунт</h1>
            ) : (
              ''
            )}
            <FormInput
              className={styles.widthInput}
              placeholder={'Логин'}
              value={login.value}
              onChange={(str) => changeFields(str, 'login')}
              status={login.isValid}
              label={'Такого пользователя не существует'}
            />
            <FormInput
              className={styles.widthInput}
              type={'password'}
              placeholder={'Пароль'}
              value={password.value}
              onChange={(str) => changeFields(str, 'password')}
              status={password.isValid}
              label={'Неверный пароль'}
            />
            {pageType === 'registration' ? (
              <>
                <FormInput
                  className={styles.widthInput}
                  type={'password'}
                  placeholder={'Повторите пароль'}
                  value={passwordRepeat.value}
                  onChange={(str) => changeFields(str, 'passwordRepeat')}
                  status={passwordRepeat.isValid}
                  label={'Пароли не совпадают'}
                />
                <FormInput
                  className={styles.widthInput}
                  type={'email'}
                  placeholder={'E-mail'}
                  value={email.value}
                  onChange={(str) => changeFields(str, 'email')}
                  status={email.isValid}
                  label={'Неверный email'}
                />
              </>
            ) : null}
          </form>

          <div className={styles.buttonWrapper}>
            {pageType === 'registration' ? (
              <>
                <FormButton disabled={!(login.isValid && password.isValid)}>Зарегистрироваться</FormButton>
                <p className={styles.text}>Уже есть аккаунт?</p>
                <Link href="/authorize/login" className={styles.link_btn}>
                  <FormButton active={true}>Войти</FormButton>
                </Link>
              </>
            ) : pageType === 'login' ? (
              <>
                <Link href="/" className={styles.link}>
                  Забыли пароль?
                </Link>
                <FormButton disabled={!(login.isValid && password.isValid)}>Войти</FormButton>
                <p className={styles.text}>Ещё нет аккаунта?</p>
                <Link href="/authorize/registration" className={styles.link_btn}>
                  <FormButton active={true}>Зарегистрироваться</FormButton>
                </Link>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorizeSubPage;
