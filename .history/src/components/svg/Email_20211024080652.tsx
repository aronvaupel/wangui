import React from 'react';
import styles from './email.module.css'

const Email = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
<svg className={styles.hover}  width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M17 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V13C0 13.7956 0.316071 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H17C17.7956 16 18.5587 15.6839 19.1213 15.1213C19.6839 14.5587 20 13.7956 20 13V3C20 2.20435 19.6839 1.44129 19.1213 0.87868C18.5587 0.316071 17.7956 0 17 0V0ZM16.33 2L10 6.75L3.67 2H16.33ZM17 14H3C2.73478 14 2.48043 13.8946 2.29289 13.7071C2.10536 13.5196 2 13.2652 2 13V3.25L9.4 8.8C9.5731 8.92982 9.78363 9 10 9C10.2164 9 10.4269 8.92982 10.6 8.8L18 3.25V13C18 13.2652 17.8946 13.5196 17.7071 13.7071C17.5196 13.8946 17.2652 14 17 14Z" fill="#F6F6F6"/>
</svg>

    
  );
};
export default Email;