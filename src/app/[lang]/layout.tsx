import '@/styles/global.scss';

import React from 'react';

import { gilroyFont } from '@/assets/fonts/fonts';

export const metadata = {
  title: 'espada',
  description: 'espada site',
};

export default function RootLayout({ children, params }: { children: React.ReactNode; params: { lang: string } }) {
  return (
    <html lang={params.lang} className={`${gilroyFont.className}`}>
      <body>{children}</body>
    </html>
  );
}
