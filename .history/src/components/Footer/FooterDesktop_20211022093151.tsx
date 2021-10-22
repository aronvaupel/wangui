import React from "react";
import styles from "./Footer.module.css";
import Call from "../svg/Call";
import Email from "../svg/Email";
import Facebook from "../svg/facebook";
import LinkedIn from "../svg/LinkeIn";
import WhatsApp from "../svg/WhatsApp";

const Footer = (): JSX.Element => {
  return (
    <div className={styles.footer}>
        <div className={styles.follow}>
        <h6>Follow us</h6>
      <a href="https://www.facebook.com/112272384568417/posts/112275211234801/">
        <Facebook />
      </a>
      <a href="https://www.linkedin.com/in/wangui-gathere-advocates-231531223/">
        <LinkedIn />
      </a></div>
      <div className={styles.contact}>
      <h6>Contact us</h6>
      <a href="https://wa.me/+254729020866">
        <WhatsApp />
      </a>
      <a href="tel:+254729020866">
        <Call />
      </a>
      <a href="mailto:wgathere@gmail.com">
        <Email />
      </a></div>
      <div className></div>
    </div>
  );
};

export default Footer;
