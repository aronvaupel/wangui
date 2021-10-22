import React from "react";
import styles from './arrow.module.css'

const Arrow = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
    
      width="24"
      height="25"
      viewBox="0 -5 24 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path className={styles.arrow}
        d="M11.178 20.3844C11.2697 20.5232 11.3925 20.6366 11.5357 20.715C11.6789 20.7934 11.8382 20.8344 12 20.8344C12.1618 20.8344 12.3211 20.7934 12.4643 20.715C12.6075 20.6366 12.7303 20.5232 12.822 20.3844L21.822 6.84271C21.9262 6.68652 21.9873 6.50357 21.9986 6.31376C22.01 6.12394 21.9712 5.9345 21.8865 5.76603C21.8018 5.59757 21.6743 5.45651 21.518 5.35818C21.3617 5.25986 21.1826 5.20803 21 5.20833H3C2.81785 5.20912 2.63934 5.26161 2.48368 5.36017C2.32802 5.45873 2.2011 5.59962 2.11657 5.7677C2.03204 5.93578 1.99309 6.12468 2.00391 6.31409C2.01473 6.50351 2.07492 6.68626 2.178 6.84271L11.178 20.3844Z"
        fill="#212841"
      />
    </svg>
  );
};
export default Arrow;