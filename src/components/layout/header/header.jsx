import React from 'react';
import styles from './header.module.scss';
import classNames from 'classnames/bind';

import logo from '../../../assets/images/logo.svg';
import search from './images/header-search.svg';
import { Link, Outlet } from 'react-router-dom';

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <>
      <header className={cx('header')}>
        <div className={cx('container', 'header__container')}>
          <a href="/">
            <img src={logo} alt="Espada" loading="eager" />
          </a>
          <div className={cx('form')}>
            <form className={cx('search__form')}>
              <input
                type="text"
                placeholder="Поиск"
                className={cx('search__input')}
              />
              <img
                src={search}
                loading="eager"
                aria-hidden="true"
                alt=""
                className={cx('search-image')}
              />
            </form>
          </div>

          <Link to="/login" className={cx('link')}>
            Войти
          </Link>
        </div>
      </header>

      <Outlet />
    </>
  );
};

export default Header;
