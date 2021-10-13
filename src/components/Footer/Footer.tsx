import React from 'react';
import styles from './Footer.module.css';
import Call from '../svg/Call';
import Email from '../svg/Email';
import Facebook from '../svg/facebook';
import LinkedIn from '../svg/LinkeIn';
import WhatsApp from '../svg/WhatsApp';
import {Link} from 'react-router-dom'




const Footer = (): JSX.Element => {
  return (
    <div className={styles.footer}>
     <a href='https://www.facebook.com/'>
      < Facebook />
      </a >
      <a href='https://www.linkedin.com/'>
      <LinkedIn />
      </a >
      <a href="https://wa.me/+254729020866">
      <WhatsApp />
      </a >
      <a href='tel:+254729020866'>
      <Call />
      </a >
      <a href='mailto:wgathere@gmail.com'>
      <Email />
      </a >
    </div>
  );
};

export default Footer;