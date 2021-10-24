import React from "react";
import styles from "./FooterDesktop.module.css";
import Call from "../svg/Call";
import Email from "../svg/Email";
import Facebook from "../svg/facebook";
import LinkedIn from "../svg/LinkeIn";
import WhatsApp from "../svg/WhatsApp";


const FooterDesktop = (): JSX.Element => {
  return (
    <div className={styles.footer}>
      <div className={styles.follow}>
        <h6>Follow us</h6>
        <div className={styles.followLinks}>
          <a href="https://www.facebook.com/112272384568417/posts/112275211234801/" className={styles.link}>
            <Facebook />
          </a>
          <a href="https://www.linkedin.com/in/wangui-gathere-advocates-231531223/" className={styles.link}>
            <LinkedIn />
          </a>
        </div>
      </div>
      <div className={styles.contact}>
        <h6>Contact us</h6>
        <div className={styles.contactLinks}>
          <a href="https://wa.me/+254729020866" className={styles.link}>
            <WhatsApp />
          </a>
          <a href="tel:+254729020866" className={styles.link}>
            <Call />
          </a>
          <a href="mailto:wgathere@gmail.com" className={styles.link}>
            <Email />
          </a>
        </div>
      </div>
      <div className={styles.disclaimer}>
        <a href="/disclaimer">
          <h4 className={styles.disclaimerLink}>Disclaimer</h4>
        </a>
      </div>
    </div>
  );
};

export default FooterDesktop;
