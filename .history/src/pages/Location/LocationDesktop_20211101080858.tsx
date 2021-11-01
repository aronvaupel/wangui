/* eslint-disable no-octal-escape */
import React from "react";
import styles from "./LocationDesktop.module.css";
import Header from "../../components/Header/HeaderMobile";
import Footer from "../../components/Footer/Footer";
import HeaderDesktop from "../../components/Header/HeaderDesktop";
import FooterDesktop from "../../components/Footer/FooterDesktop";

function LocationDesktop(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <HeaderDesktop type={"location"} />
      </div>
      <main
        className={styles.main}
        style={{
          backgroundImage: "url(/assets/7.webp)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className={styles.gapMakerDesktop}>
          <section id={"section1"} className={styles.section}>
            <div className={styles.adressBg}>
              <h3 className={styles.headLine}>
                WANGUI GATHERE<span>ADVOCATES</span>
              </h3>
              <h3 className={styles.title}>
                Advocate LLB(UoN),<span> Dip(KSL)</span>
              </h3>
              <p>
                Suraj Plaza, Limuru Road <br></br> 6th Floor, Suites 607 and 608{" "}
                <br></br> P.O. Box 58609 - 00100 <br></br> Nairobi, Kenya
              </p>
            </div>
          </section>
          <div className={styles.mapWrapper}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8331601264526!2d36.820590115112495!3d-1.2732785990712978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17285a9b4b0b%3A0x13124c677d2be001!2sSuraj%20Plaza!5e0!3m2!1sde!2sde!4v1634579249218!5m2!1sde!2sde"
              title="map"
              className={styles.map}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </main>
      <div className={styles.footer}>
        <FooterDesktop type={"invisible"} />
      </div>
    </div>
  );
}
export default LocationDesktop;
