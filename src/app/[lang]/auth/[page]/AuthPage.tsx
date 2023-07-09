'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

import EspadaLogo from '@/assets/icons/EspadaLogo.svg';
import { I_authForm } from '@/dectionaries/translations';
import useAuthStore from '@/store/useAuthStore';

import styles from './AuthPage.module.scss';

interface FormState {
  username: string;
  password: string;
  confirm_password: string;
  email: string;
}

const AuthPage: React.FC<{ authForm: I_authForm; page: string }> = ({ authForm, page }) => {
  const isLogin = page === 'login';
  const isRegister = page === 'register';
  const isRefresh = page === 'refresh';
  const isRefresh = page === 'resetForm';

  const { login, register } = useAuthStore((store) => ({ login: store.login, register: store.register }));

  const [formState, setFormState] = useState<FormState>({
    username: '',
    password: '',
    confirm_password: '',
    email: '',
  });
  const [wrongState, setWrongState] = useState<FormState>({
    username: '',
    password: '',
    confirm_password: '',
    email: '',
  });
  const [errorState, setErrorState] = useState<FormState>({
    username: '',
    password: '',
    confirm_password: '',
    email: '',
  });

  const changeState = (newString: string, key: keyof FormState) => {
    setFormState((prev) => ({ ...prev, [key]: newString }));
  };

  const submitFormHandler = () => {
    // isLogin
    // isRegister
  };

  return (
    <div className={styles.authPage}>
      <Image src={EspadaLogo} alt={'//Espada'} />
      {isLogin && <h1 className={styles.authPage_title}>{authForm.loginTitle}</h1>}
      {isRegister && <h1 className={styles.authPage_title}>{authForm.registerTitle}</h1>}

      <form
        className={styles.authForm}
        onSubmit={(e) => {
          e.preventDefault();
          submitFormHandler();
        }}
      >
        {(Object.keys(formState) as Array<keyof FormState>).map((key) => {
          let type: React.HTMLInputTypeAttribute = 'text';
          if (key === 'password' || key === 'confirm_password') {
            type = 'password';
          }

          if (isLogin && (key === 'confirm_password' || key === 'email')) {
            return null;
          }

          return (
            <label key={key} className={`${styles.label} ${formState[key] !== '' ? styles.active : ''}`}>
              <input
                className={styles.input}
                type={type}
                autoComplete={key}
                value={formState[key]}
                onChange={(e) => changeState(e.target.value, key)}
              />
              <span className={styles.placeholder}>{authForm[key]}</span>
              {wrongState[key] !== '' ? <span className={styles.wrong}>{wrongState[key]}</span> : null}
              {errorState[key] !== '' ? <span className={styles.error}>{errorState[key]}</span> : null}
            </label>
          );
        })}
      </form>

      {isRegister && (
        <>
          <button
            className={styles.mainButton}
            onClick={(e) => {
              e.preventDefault();
              submitFormHandler();
            }}
          >
            {authForm.singUp}
          </button>

          <p className={styles.textDescription}>{authForm.alreadyHaveAccount}</p>
          <Link className={styles.sideButton} href={'/auth/login'}>
            {authForm.singIn}
          </Link>
        </>
      )}
      {isLogin && (
        <>
          <Link
            className={styles.refreshLink}
            // href={'/auth/refresh'}
            href={'https://youtu.be/gz---KT7P5g'}
            target={'_blank'}
          >
            {authForm.refreshPassword}
          </Link>

          <button
            className={styles.mainButton}
            onClick={(e) => {
              e.preventDefault();
              submitFormHandler();
            }}
          >
            {authForm.singIn}
          </button>

          <p className={styles.textDescription}>{authForm.dontHaveAccount}</p>
          <Link className={styles.sideButton} href={'/auth/register'}>
            {authForm.singUp}
          </Link>
        </>
      )}
    </div>
  );
};

export default AuthPage;
