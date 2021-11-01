/* eslint-disable no-octal-escape */
import React from "react";
import styles from "./Location.module.css";
import Footer from "../../components/Footer/Footer";
import HeaderMobile from "../../components/Header/HeaderMobile";

function Location(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <HeaderMobile />
      </div>
      <main className={styles.main}>
        <img
          src="/assets/4.webp"
          alt="office building"
          className={styles.img}
        />
        <section id={"section1"} className={styles.section}>
          <h3 className={styles.headLine}>
            WANGUI GATHERE <span>ADVOCATES</span>
          </h3>
          <h3 className={styles.title}>
            Advocate LLB <span>(UoN), Dip(KSL)</span>
          </h3>
          <p className={styles.p}>
            Suraj Plaza, Limuru Road <br></br> 6th Floor, Suites 607 and 608{" "}
            <br></br> P.O. Box 58609 - 00100 <br></br> Nairobi, Kenya<br></br>Phone: +254792173001
          </p>
        </section>

        <div className={styles.mapWrapper}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8331601264526!2d36.820590115112495!3d-1.2732785990712978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17285a9b4b0b%3A0x13124c677d2be001!2sSuraj%20Plaza!5e0!3m2!1sde!2sde!4v1634579249218!5m2!1sde!2sde"
            title="map"
            className={styles.map}
            loading="lazy"
          ></iframe>
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default Location;
