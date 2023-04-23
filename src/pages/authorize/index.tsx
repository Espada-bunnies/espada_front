import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import useAuth from '@/store/useAuth';

const Authorize = () => {
  const router = useRouter();

  const isLogin = useAuth((state) => state.isLogin);

  useEffect(() => {
    const link = isLogin ? '/home' : '/authorize/login';
    router.push(link, undefined, { shallow: true });
  }, [isLogin]);

  return <></>;
};

export default Authorize;
