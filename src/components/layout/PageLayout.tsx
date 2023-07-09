import React from 'react';

import AuthGuard from '@/components/AuthGuard';
import Header from '@/components/layout/Header';

import styles from './PageLayout.module.scss';

interface PageLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<PageLayoutProps> = async ({ children }) => {
  return (
    <>
      <AuthGuard />
      <main className={styles.mainAuth}>{children}</main>
    </>
  );
};

const PageLayout: React.FC<PageLayoutProps> = async ({ children }) => {
  return (
    <>
      <AuthGuard />
      <Header />
      <main className={styles.main}>
        <aside></aside>
        <div>{children}</div>
      </main>
    </>
  );
};

export { AuthLayout, PageLayout };
