import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import useAuth from '@/store/useAuth';

import styles from './Home.module.scss';

const Main = () => {
  const isLogin = useAuth((state) => state.isLogin);
  const router = useRouter();

  useEffect(() => {
    if (!isLogin) {
      router.push('/authorize', undefined, { shallow: true });
    }
  }, [isLogin]);

  return <>Главная страница</>;
};

export default Main;
