import Link from 'next/link';
import React, { useState } from 'react';

import MainLogo from '@/assets/icons/logo.svg';
import SearchIcon from '@/assets/icons/Search.svg';
import Profile from '@/components/Blocks/Profile';
import useAuth from '@/store/useAuth';

import styles from './Header.module.scss';

const Header = () => {
  const [profile, setProfile] = useState<string>('');
  const [menu, setMenu] = useState<boolean>(false);

  const handleClick = () => {
    if (profile === '') {
      setProfile('active');
      setMenu(!menu);
    } else {
      setProfile('');
      setMenu(false);
    }
  };

  const isLogin = useAuth((state) => state.isLogin);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.header_container}`}>
        <Link href="/">
          <MainLogo />
        </Link>
        <div className={styles.search}>
          <form className={styles.search_form}>
            <input type="text" placeholder="Поиск" className={styles.search_input} />
            <SearchIcon className={styles.search_image} />
          </form>
        </div>

        {isLogin ? (
          <Profile />
        ) : (
          <Link href="/login" className={styles.link}>
            Войти
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
