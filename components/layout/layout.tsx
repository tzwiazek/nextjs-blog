import React from 'react';
import { Nav } from 'components/nav/nav';
import { Main } from 'components/main/main';
import { Footer } from 'components/footer/footer';

export const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <Nav />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};
