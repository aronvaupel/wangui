import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeaderDesktop.module.css';




const HeaderDesktop = (): JSX.Element => {



  return (
    <div className={styles.header}>
      <Link to={'/'}>
      <img src="/assets/logo.webp" alt="logo" />
      
      </Link> 
      <h1 className={styles.headerAnimation}>WANGUI GATHERE <span className={styles.headerAnimationSpan}>ADVOCATES</span></h1>
      <div className={styles.links}>
      <Link to={'/team'}> <h3 className={styles.navLink}>Our <span>TEAM</span></h3> </Link>
      <Link to={'/services'}><h3 className={styles.navLink>Our <span>SERVICES</span></h3></Link>
      <Link to={'/location'}><h3>Our <span>LOCATION</span></h3> </Link>
      </div>
    </div>
  );
};

export default HeaderDesktop;