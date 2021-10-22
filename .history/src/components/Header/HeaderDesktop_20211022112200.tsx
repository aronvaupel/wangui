import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './HeaderDesktop.module.css';




const HeaderDesktop = (): JSX.Element => {



  return (
    <div className={styles.header}>
      <Link to={'/'}>
      <img src="/assets/logo.webp" alt="logo" />
      
      </Link> 
      <h1 className={styles.headerAnimation}>WANGUI GATHERE <span className={styles.headerAnimationSpan}>ADVOCATES</span></h1>
      <div className={styles.links}>
      <NavLink to={'/team'} className={styles.link} activeClassName> <h3 >Our <span className={styles.span}>TEAM</span></h3> </NavLink>
      <NavLink to={'/services'} className={styles.link}><h3 >Our <span className={styles.span}>SERVICES</span></h3></NavLink>
      <NavLink to={'/location'} className={styles.link}><h3 >Our <span className={styles.span}>LOCATION</span></h3> </NavLink>
      </div>
    </div>
  );
};

export default HeaderDesktop;