import React from 'react';
import styles from './footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>Blog name</div>
      <div className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore enim ad minim veniam, magna aliqua.
      </div>
      <div className={styles.copyright}>Blog name © {new Date().getFullYear()}</div>
    </footer>
  );
};
