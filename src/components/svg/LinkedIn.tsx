import React from 'react';
import styles from './LinkedIn.module.css'

const LinkedIn = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
<svg className={styles.hover} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g clip-path="url(#clip0)">
<path d="M6.201 21H1.84725V6.9795H6.201V21ZM4.0215 5.067C2.6295 5.067 1.5 3.9135 1.5 2.5215C1.5 1.85276 1.76566 1.2114 2.23853 0.73853C2.7114 0.265657 3.35276 0 4.0215 0C4.69024 0 5.3316 0.265657 5.80447 0.73853C6.27734 1.2114 6.543 1.85276 6.543 2.5215C6.543 3.9135 5.4135 5.067 4.0215 5.067ZM22.4955 21H18.1515V14.175C18.1515 12.5482 18.1185 10.4625 15.888 10.4625C13.6245 10.4625 13.2772 12.2295 13.2772 14.058V21H8.928V6.9795H13.1033V8.892H13.164C13.7453 7.79025 15.165 6.62775 17.283 6.62775C21.6893 6.62775 22.4993 9.5295 22.4993 13.2983V21H22.4955Z" fill="#F6F6F6"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>

    
  );
};
export default LinkedIn;