import React from 'react';
import styles from './call.module.css'

const Call = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
<svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path className={styles.hover} d="M2.77201 0.438993L3.84801 0.0949929C4.85801 -0.227007 5.93501 0.293993 6.36801 1.31199L7.22701 3.33999C7.60101 4.22299 7.39401 5.26199 6.71301 5.90799L4.81901 7.70599C4.93501 8.78199 5.29701 9.84099 5.90301 10.883C6.47879 11.8912 7.25104 12.7736 8.17401 13.478L10.449 12.718C11.312 12.431 12.251 12.762 12.779 13.539L14.012 15.349C14.627 16.253 14.517 17.499 13.754 18.265L12.936 19.086C12.122 19.903 10.959 20.2 9.88401 19.864C7.34501 19.072 5.01101 16.721 2.88101 12.811C0.748009 8.89499 -0.00499086 5.57099 0.623009 2.84299C0.887009 1.69499 1.70401 0.779993 2.77201 0.438993Z" fill="#F6F6F6"/>
</svg>

    
  );
};
export default Call;