/* eslint-disable no-octal-escape */
import React from "react";
import styles from "./OurTeamDesktop.module.css";
import { Carousel } from "react-responsive-carousel";
import TeamCard from "../../components/TeamCard/TeamCard";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HeaderDesktop from "../../components/Header/HeaderDesktop";
import FooterDesktop from "../../components/Footer/FooterDesktop";

function OurTeamDesktop(): JSX.Element {
  const team = [
    {
      type: "mobile",
      firstName: "Wangui",
      familyName: "Gathere",
      imageSrc: "/assets/Wangui.webp",
      text: "Wangui Gathere is the managing partner at the firm. She holds a Bachelor of Law degree from the University of Nairobi and a Post Graduate Diploma in Law from the Kenya School of Law. She heads the Litigation and Commercial law department at the firm.For Wangui every case she takes up is personal and not just another case file. She takes the trust her clients put in her personally and puts herself into every case.  Besides practicing law, Wangui is big on advocacy and is an ambassador at the International Federation of Psoriasis Associations(IFPA).When not in the corridors of justice, you'll find her lobbying and educating the public on psoriasis.",
    },
    {
      type: "mobile",
      firstName: "Lenah",
      familyName: "Moenga",
      imageSrc: "/assets/Lenah.webp",
      text: "Lenah Moenga is an Advocate of the High Court of Kenya with an LL.B Degree from the University of Nairobi, a Post Graduate Diploma in Law from the Kenya School of Law  and currently undertaking LLM in Law, Governance and Democracy at the University of Nairobi. She specializes in Human Rights Law, Refugee Law, Gender and Child Protection.",
    },
    {
      type: "mobile",
      firstName: "David",
      familyName: "Kanyeki",
      imageSrc: "/assets/David.webp",
      text: "David Kanyeki is a Partner in the firm. He holds a Bachelor of Laws Degree from Kenyatta University  and a Post Graduate Diploma in Law from the Kenya School of Law. He has a firm grasp of Immigration Law and Commercial Law. His quick wit coupled with a strong desire to deliver makes him a formidable lawyer. He has a deep social conscience and is actively involved in several community service projects. He describes himself as half lawyer half human. When not in a suit you'll probably find him watching football or hiking a random hill.",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <HeaderDesktop type={"team"} />
      </div>
      <main
        className={styles.main}
        style={{ 
          backgroundImage: "url(/assets/9.webp)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className={styles.carouselWrapper}>
          <Carousel
            showThumbs={false}
            showIndicators={false}
            showStatus={false}
            className={styles.carousel}
            useKeyboardArrows={true}
            emulateTouch={true}
            ariaLabel='Team members and bio'
            transitionTime={1500}
          >
            {team.map((item, i) => (
              <TeamCard
                key={i}
                type="desktop"
                firstName={item.firstName}
                familyName={item.familyName}
                imageSrc={item.imageSrc}
                text={item.text}
              />
            ))}
          </Carousel>
        </div>
      </main>
      <div className={styles.footer}>
        <FooterDesktop type={"invisible"} />
      </div>
    </div>
  );
}
export default OurTeamDesktop;