import React from 'react';
import styles from './header-links.module.css';
import { Link } from 'react-router-dom';

export type HeaderLinkProps = {
  url: string;
  value: 'Our mission' | 'Our team' | 'Our location' | 'Contact us';
};

const HeaderLinks = ({ value, url }: HeaderLinkProps): JSX.Element => {
  return (
    <div >
      <Link to={url} className={styles.links}>
        {value}
      </Link>
    </div>
  );
};

export default HeaderLinks;