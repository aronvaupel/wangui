import React from 'react';

const BurgerButton = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg width="40" height="25" viewBox="0 0 40 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M40 25H0V20.8333H40V25ZM40 14.5833H0V10.4167H40V14.5833ZM40 4.16667H0V0H40V4.16667Z" fill="#212841"/>
    </svg>

    
  );
};
export default BurgerButton;