/* eslint-disable no-octal-escape */
import React from "react";
import styles from "./ServicesDesktop.module.css";

import ArrowUp from "../../components/svg/arrowUp";
import { HashLink } from "react-router-hash-link";
import "react-scroll";

import Arrow from "../../components/svg/arrow";
import HeaderDesktop from "../../components/Header/HeaderDesktop";
import FooterDesktop from "../../components/Footer/FooterDesktop";

function ServicesDesktop(this: any): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <HeaderDesktop type={"services"} />
      </div>
      <main
        className={styles.main}
        style={{
          backgroundImage: "url(" + "/assets/10.webp" + ")",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center right",
          width: "100vw",
        }}
      >
        <section id={"section1"} className={styles.section}>
          <div className={styles.pWrapper}>
            <h2 className={styles.subheader}>
              Litigation & dispute resolution
            </h2>
            <p className={styles.text}>
              Our litigation lawyers help resolve your dispute through
              mediation, arbitration or litigation. Our approach lays ephasis on
              understanding our clients problems and have an all round
              experience of the dispute solving world.
            </p>

            <HashLink to={"/services/#section2"} className={styles.links} smooth={true}>
              <Arrow />
            </HashLink>
          </div>
        </section>

        <section id={"section2"} className={styles.section}>
          <div className={styles.pWrapper}>
            <h2 className={styles.subheader}>Corporate and commercial</h2>
            <p className={styles.text}>
              Ranges from international sales of goods and services, joint
              ventures, manufacturing contracts, incorporation of public and
              private companies. Owing to our vast range of expertise and
              experience a client is assured of getting well rounded
              representation
            </p>{" "}
            <HashLink to={"/services/#section3"} className={styles.links} smooth={true}>
              <Arrow />
            </HashLink>
          </div>
        </section>

        <section id={"section3"} className={styles.section}>
          <div className={styles.pWrapper}>
            <h2 className={styles.subheader}>Conveyancing and Real Estate</h2>
            <p className={styles.text}>
              In Conveyancing law we deal with all aspects of law related to
              land i.e sales and purchases, legal aspects land lord and tenant
              contracts and rights, property development, finance, leases and
              banking securities
            </p>{" "}
            <HashLink to={"/services/#section5"} className={styles.links} smooth={true}>
              <Arrow />
            </HashLink>
          </div>
        </section>

        <section id={"section4"} className={styles.section}>
          <div className={styles.pWrapper}>
            <h2 className={styles.subheader}>
              Immigration and Expatriate Services
            </h2>
            <p className={styles.text}>
              Our immigration law team works closely with expats making sure
              their legal matters are addressed professionally and efficiently.
              We have a wide range of expertise and experience in business
              setups, visas procurement, work permits, dependent passes, student
              passes, citizenship acquisition, permanent residence and
              registration of foreign nationals.
            </p>{" "}
            <HashLink to={"/services/#section1"} className={styles.links} smooth={true}>
              <ArrowUp />
            </HashLink>
          </div>
        </section>

        <section id="section5" className={styles.footer}>
          <FooterDesktop />
        </section>
      </main>
    </div>
  );
}
export default ServicesDesktop;
