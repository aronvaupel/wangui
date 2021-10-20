/* eslint-disable no-octal-escape */
import React from "react";
import styles from "./HomeDesktop.module.css";
import Header from "../../components/Header/HeaderDesktop";
import ArrowUp from "../../components/svg/arrowUp";
import { HashLink } from "react-router-hash-link";
import "react-scroll";
import Footer from "../../components/Footer/Footer";
import Arrow from "../../components/svg/arrow";

function HomeDesktop(this: any): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Header />
      </div>
      <main
        className={styles.main}
        style={{
          // eslint-disable-next-line no-useless-concat
          backgroundImage: "url(" + "/assets/6.webp" + ")",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center right",
          width: "100vw",
        }}
      >
        <section id={"section1"} className={styles.section}>
          <div className={styles.pWrapper}>
            <h2 className={styles.subheaderAnimation}>Integrity</h2>
            <p>
              Our mission is to provide efficient and professional legal
              services tailored to meet the needs of clients, domestically,
              regionally and internationally.
            </p> <HashLink to={"/#section2"} className={styles.links} smooth={true}>
            <Arrow />
          </HashLink>
          </div>{" "}
         
        </section>

        <section id={"section2"} className={styles.section}>
          <div className={styles.pWrapper}>
            <h2 className={styles.subheaderAnimation}>Professionalism</h2>
            <p>
              Wangui Gathere Advocates is a is a medium sized legal entity that
              provides high level legal services in banking and financial law,
              public finance and accounting law, commercial and corporate law,
              insurance law, Conveyance and property law, succession law, civil
              and criminal litigation and alternative dispute resolution. At
              Wangui Gathere we aim to provide comprehensive legal services
              geared at achieving our clients’ business, personal and
              professional goals.
            </p><HashLink to={"/#section5"} className={styles.links} smooth={true}>
            <Arrow />
          </HashLink>
          </div>
          
        </section>

        <section id={"section3"} className={styles.section}>
          <div className={styles.pWrapper}>
            <h2 className={styles.subheaderAnimation}>Efficency</h2>
            <p>
              Our vision is to fuse the law and the future, to provide our
              clients with skilled legal advice in a timely and efficient
              manner. We strive to handle each matter with accountability and
              integrity. We focus our attention on the legal aspects of our
              client’s business so that our clients can focus their attention on
              the success of their business. Our vision reflects our values:
              integrity, service, excellence and teamwork.
            </p><HashLink to={"/#section1"} className={styles.links} smooth={true}>
            <ArrowUp />
          </HashLink>
          </div>
          
        </section>

        <section id="section5" className={styles.footer}>
          <Footer />
        </section>
      </main>
    </div>
  );
}
export default HomeDesktop;
