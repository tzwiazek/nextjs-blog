import React, { useState } from 'react';
import { navLinks } from 'components/routes/routes';
import Link from 'next/link';
import styles from './nav.module.css';
import { RoutesInterface } from 'shared/interfaces/routes.interface';

export const Nav = () => {
  const [isMenuActive, setMenuActive] = useState<boolean>(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link href="/">Blog name</Link>
      </div>
      <div
        className={`${styles.hamburger} ${isMenuActive ? styles.open : ''}`}
        onClick={() => setMenuActive(!isMenuActive)}>
        <div></div>
      </div>
      {isMenuActive && (
        <ul>
          {navLinks.map((link: RoutesInterface) => (
            <li key={link.id}>
              <Link href={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};
