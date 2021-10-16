import React  from 'react';
import { animated, useSpring } from 'react-spring';
import styles from './menu.module.css';

export type MenuProps = {
  showMenu: boolean;
  setShowMenu: Function;
  style: Function;
  onClick:()=> void;
}

const Menu = ({showMenu, setShowMenu, onClick}:MenuProps): JSX.Element => {
const animation = useSpring({
  config: {
    duration:250
  },
  transform: showMenu ? `translateX(0%)`:`translateX(100%)`
})

function closeMenu()  {
 setShowMenu(false)
}

  return (
    <>
    {showMenu ? <div className={styles.wrapper}  onClick={closeMenu}> 
      <animated.div style={animation}>
      <div className={styles.menu}>
      <a href="/team"><h3>Our <span>TEAM </span></h3> </a>
      <a href="/services"><h3>Our <span>SERVICES</span></h3></a>
      <a href="/location"><h3>Our <span>LOCATION</span></h3></a>
      <a href="/disclaimer"><h3>Our <span>DISCLAIMER</span></h3></a>
    </div>
    </animated.div>
    </div> : null}
   </>
  );
};

export default Menu;