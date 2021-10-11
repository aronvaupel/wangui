import React from 'react';
import styles from './header.module.css';


const Header = (): JSX.Element => {
  return (
    <div className={styles.header}>
      <h1>Header</h1>
    </div>
  );
};

export default Header;