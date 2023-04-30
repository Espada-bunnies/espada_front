import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import MainLogo from '@/assets/icons/logo.svg';

import styles from './Authorize.module.scss';
import Form from '@/components/views/authorizeViews/Form';
import { IFormField, IUser } from './authorize.types';
import BottomButtons from '@/components/views/authorizeViews/BottomButtons/BottomButtons';





const AuthorizeSubPage = () => {

  const [pageType, setPageType] = useState<string>('login');


  const [user, setUser] = useState<IUser>({
    login: { value: '', isValid: null },
    password: { value: '', isValid: null },
    passwordRepeat: { value: '', isValid: null },
    email:  { value: '', isValid: null },
  })

  const changeUser = ( login: IFormField, password: IFormField, passwordRepeat: IFormField, email: IFormField, ) => {
     
    setUser({
      login: { value: login.value, isValid: login.isValid },
      password: { value: password.value, isValid: password.isValid },
      passwordRepeat: { value: passwordRepeat.value, isValid: passwordRepeat.isValid },
      email:  { value: email.value, isValid: email.isValid },
    })

    return true
  }

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
        if (user.login.isValid && user.password.isValid) {
          //post request
          console.log(JSON.stringify({ login: user.login.value, password: user.password.value }));
        }
        break;
      }
      case 'registration': {
        if (user.login.isValid && user.password.isValid && user.passwordRepeat.isValid && user.email.isValid) {
          //post request
          console.log(JSON.stringify({ login: user.login.value, password: user.password.value, email: user.email.value }));
        }
        break;
      }
      case 'forgotPassword': {
        if (user.email.isValid) {
          //post request
          console.log(JSON.stringify({ email: user.email.value }));
        }
        break;
      }
    }
  };

  return (
    <div>
      <div className={styles.authorize_page}>
        <div>
          <div className={styles.logo_wrapper}>
            <Link href="/">
              <MainLogo 
                className={styles.logo} 
                // width={229}
                // height={53}
                sizes="(max-width: 229px) 100vw,
                (max-width: 53px) 53vw,
                33vw"
              />
            </Link>
          </div>
          <form className={styles.form} onSubmit={submitFormHandler}>
            {
              pageType === 'registration' ? (
                <h1 className={styles.form_title}>Регистрация аккаунта</h1>
              ) : pageType === 'login' ? (
                <h1 className={styles.form_title}>Вход в аккаунт</h1>
              ) : pageType === 'forgotPassword' || 'message' ? (
                <h1 className={styles.form_title}>Восстановление пароля</h1>
              ) : ('')
            }
            <Form pageType={pageType} changeUser={changeUser}/>
            <BottomButtons pageType={pageType} user={user}/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthorizeSubPage;
