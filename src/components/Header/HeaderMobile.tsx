import React from 'react';
import BurgerButton from '../svg/burger';
import styles from './HeaderMobile.module.css';



const HeaderMobile = (): JSX.Element => {
  return (
    <div className={styles.header}>
      <img src="/assets/logo.webp" alt="logo" />
      <div className={styles.links}>
      <BurgerButton/>
      </div>
    </div>
  );
};

export default HeaderMobile;