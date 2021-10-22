import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./HeaderDesktop.module.css";

export type HeaderProps = {
  type: "home" | "location" | "team" | "services" | "disclaimer";
};

const HeaderDesktop = ({ type }: HeaderProps): JSX.Element => {
  function Header(): string {
    if (type === "home") {
      return "WANGUI GATHERE";
    } else if (type === "location" || type ==="team" || type ==="services") {
      return "OUR";
    } else {
      return "DIS";
    }
  }

  function HeaderSpan(): string {
    if (type === "home") {
      return " A DVOCATES";
    } else if (type === "location") {
      return " LOCATION";
    } else if (type === "team") {
      return " TEAM";
    } else if (type === "services") {
      return " SERVICES";
    } else {
      return "CLAIMER";
    }
  }

  return (
    <div className={styles.header}>
      <Link to={"/"}>
        <img src="/assets/logo.webp" alt="logo" />
      </Link>
      <h1 className={styles.headerAnimation}>
        {Header()}
        <span className={styles.headerAnimationSpan}>{HeaderSpan()}</span>
      </h1>

      <div className={styles.links}>
        <NavLink
          to={"/team"}
          className={styles.link}
          activeClassName={styles.active}
        >
          <h3 className={styles.linkH3}>
            Our <span className={styles.span}>TEAM</span>
          </h3>
        </NavLink>
        <NavLink
          to={"/services"}
          className={styles.link}
          activeClassName={styles.active}
        >
          <h3 className={styles.linkH3}>
            Our <span className={styles.span}>SERVICES</span>
          </h3>
        </NavLink>
        <NavLink
          to={"/location"}
          className={styles.link}
          activeClassName={styles.active}
        >
          <h3 className={styles.linkH3}>
            Our <span className={styles.span}>LOCATION</span>
          </h3>{" "}
        </NavLink>
      </div>
    </div>
  );
};

export default HeaderDesktop;
