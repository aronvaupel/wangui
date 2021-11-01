/* eslint-disable no-octal-escape */
import React from "react";
import styles from "./Services.module.css";
import ArrowUp from "../../components/svg/arrowUp";
import { HashLink } from "react-router-hash-link";
import "react-scroll";
import Footer from "../../components/Footer/Footer";
import HeaderMobile from "../../components/Header/HeaderMobile";
import ArrowUpMobile from "../../components/svg/arrowUpMobile";

function Services(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <HeaderMobile />
      </div>
      <main className={styles.main}>
        <section id={"section1"} className={styles.section}>
          <div className={styles.pWrapper}>
            <h4 className={styles.h4}>Litigation & dispute resolution</h4>
            <div className={styles.pWrapper}>
              <p className={styles.p}>
                Our litigation lawyers help resolve your dispute through
                mediation, arbitration or litigation. Our approach lays ephasis
                on understanding our clients problems and have an all round
                experience of the dispute solving world.
              </p>
            </div>
          </div>
        </section>
        <section id={"section2"} className={styles.section}>
          <img src="/assets/12.webp" alt="" className={styles.img} />
          <div className={styles.pWrapper}>
            <h4 className={styles.h4}>Corporate and commercial</h4>
            <div className={styles.pWrapper}>
              <p className={styles.p}>
                Ranges from international sales of goods and services, joint
                ventures, manufacturing contracts, incorporation of public and
                private companies. Owing to our vast range of expertise and
                experience a client is assured of getting well rounded
                representation
              </p>
            </div>
          </div>
        </section>
        <section id={"section3"} className={styles.section}>
          <img src="/assets/13.webp" alt="" className={styles.img} />
          <div className={styles.pWrapper}>
            <h4 className={styles.h4}>Conveyancing and Real Estate</h4>
            <div className={styles.pWrapper}>
              <p className={styles.p}>
                In Conveyancing law we deal with all aspects of law related to
                land i.e sales and purchases, legal aspects land lord and tenant
                contracts and rights, property development, finance, leases and
                banking securities
              </p>
            </div>
          </div>
        </section>
        <section id={"section4"} className={styles.section}>
          <img src="/assets/11.webp" alt="" className={styles.img} />
          <div className={styles.pWrapper}>
            <h4 className={styles.h4}>Immigration and Expatriate Services </h4>
            <div className={styles.pWrapper}>
              <p className={styles.p}>
                Our immigration law team works closely with expats making sure
                their legal matters are addressed professionally and
                efficiently. We have a wide range of expertise and experience in
                business setups, visas procurement, work permits, dependent
                passes, student passes, citizenship acquisition, permanent
                residence and registration of foreign nationals.
              </p>
            </div>
          </div>
          <HashLink
            to={"/services/#section1"}
            className={styles.links}
            smooth={true}
          >
            <ArrowUpMobile />
          </HashLink>
        </section>
      </main>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
export default Services;
