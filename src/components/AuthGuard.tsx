'use client';

import React from 'react';

import useAuthGuard from '@/store/authGuard';

const AuthGuard: React.FC = () => {
  useAuthGuard();

  return <></>;
};

export default AuthGuard;
