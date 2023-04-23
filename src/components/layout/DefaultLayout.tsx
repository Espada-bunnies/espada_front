import React from 'react';

interface DefaultLayout_props {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayout_props> = ({ children }) => {
  return (
    <>
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};

export default DefaultLayout;
