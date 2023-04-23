import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

import mockedAvatar from '@/assets/images/mockedAvatar.jpg';
import useAuth from '@/store/useAuth';

import styles from './Profile.module.scss';

const Profile = () => {
  const [profile, setProfile] = useState('');
  const [menu, setMenu] = useState(false);

  const menuRef = useRef(null);

  const menuClickHandler = (e: MouseEvent) => {
    if (e.currentTarget !== menuRef.current && menu) {
    }
  };

  useEffect(() => {
    document.addEventListener('click', menuClickHandler);

    return () => document.removeEventListener('click', menuClickHandler);
  }, []);

  const handleClick = () => {
    if (profile === '') {
      setProfile('active');
      setMenu(!menu);
    } else {
      setProfile('');
      setMenu(false);
    }
  };

  const user = useAuth((state) => state.userData);

  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.userPage} ${profile === 'active' && styles.active} ${menu === true && 'focus'}`}
        onClick={handleClick}
      >
        <Image src={mockedAvatar} alt="" loading="eager" aria-hidden="true" />
        <p className={styles.name}>{user.name}</p>
      </div>

      <div ref={menuRef} className={`${styles.menu_wrapper} ${menu ? styles.active : ''}`} onClick={handleClick}>
        <div className={styles.menu}>
          <Link href="/" className={styles.link}>
            Профиль
          </Link>
          <Link href="/" className={styles.link}>
            Настройки
          </Link>
          <Link href="/" className={styles.link}>
            Выход
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
