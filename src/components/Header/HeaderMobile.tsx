import React, { useState } from 'react';
import { animated } from 'react-spring';
import Menu from '../menu/menu';
import BurgerButton from '../svg/burger';
import styles from './HeaderMobile.module.css';




const HeaderMobile = (): JSX.Element => {
const [showMenu, setShowMenu] = useState (false);

const openMenu =() => {
  setShowMenu (menu => !menu)
}



  return (
    <div className={styles.header}>
      <img src="/assets/logo.webp" alt="logo" />
      <div className={styles.links}>
      <button onClick={openMenu} className={styles.button} >
      <BurgerButton aria-label='open menu'/>
      </button >
      <Menu showMenu={showMenu} setShowMenu={setShowMenu} style={animated} onClick={function (): void {
          throw new Error('Function not implemented.');
        } }/>
      </div>
    </div>
  );
};

export default HeaderMobile;