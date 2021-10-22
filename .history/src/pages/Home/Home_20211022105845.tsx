/* eslint-disable no-octal-escape */
import React from 'react';
import styles from './Home.module.css';
import Header from '../../components/Header/HeaderMobile';
import ArrowUp from '../../components/svg/arrowUp';
import { HashLink  } from 'react-router-hash-link';
import  "react-scroll";
import Footer from '../../components/Footer/Footer';
import HeaderMobile from '../../components/Header/HeaderMobile';



function Home(): JSX.Element {
 
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <HeaderMobile />
      </div>
      <main className={styles.main}>
        <section id={'section1'} className={styles.section}>
        <img src="/assets/1.webp" alt="" className={styles.img}/>
        <h3>WANGUI GATHERE <span>ADVOCATES</span></h3>
       <h4>Integrity Professionalism Efficency</h4>
       <div className={styles.pWrapper}>
       <p>Our mission is to provide efficient and professional legal services tailored to meet the needs of clients, domestically, regionally and internationally.</p>
       </div>
       </section>
       <section id={'section2'} className={styles.section}>
       <img src="/assets/2.webp" alt="" className={styles.img} />
        <div className={styles.pWrapper}>
       <p>Wangui Gathere Advocates is a is a medium sized legal entity that provides high level legal services in banking and financial law, public finance and accounting law, commercial and corporate law, insurance law, Conveyance and property law, succession law, civil and criminal litigation and alternative dispute resolution. 
       At Wangui Gathere we aim to provide comprehensive legal services geared at achieving our clients’ business, personal and professional goals.
       </p>
        </div>
       </section>
       <section id={'section3'} className={styles.section}>
       <img src="/assets/3.webp" alt="" className={styles.img} />
        <div className={styles.pWrapper}>
       <p>Our vision is to fuse the law and the future, to provide our clients with skilled legal advice in a timely and efficient manner. We strive to handle each matter with accountability and integrity. We focus our attention on the legal aspects of our client’s business so that our clients can focus their attention on the success of their business. Our vision reflects our values: integrity, service, excellence and teamwork.</p> 
       </div>
       <HashLink to={'/#section1'} className={styles.links} smooth={true}>
       <ArrowUp />
       </HashLink></section>
      </main>
      <div className={styles.footer}>
    <Footer /></div>
    </div>
  );
}
export default Home;