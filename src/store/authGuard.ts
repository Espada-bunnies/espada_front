'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

import useAuthStore from '@/store/useAuthStore';

const useAuthGuard = () => {
  const isAuth = useAuthStore((store) => store.authCheck)();
  const navigation = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isAuth && !pathname.includes('register') && !pathname.includes('login')) {
      navigation.push('/auth/login');
    }
  }, []);
};

export default useAuthGuard;
