/* eslint-disable no-octal-escape */
import React from "react";
import styles from "./OutTeam.module.css";
import Footer from "../../components/Footer/Footer";
import HeaderMobile from "../../components/Header/HeaderMobile";
import { Carousel } from 'react-responsive-carousel'
import TeamCard from "../../components/TeamCard/TeamCard";

function OutTeam(): JSX.Element {

    const team = [
        {name:'Wangui Gathere',
    imageSrc: '',
title:'',
text:''},
      
    ]

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <HeaderMobile />
      </div>
      <main
        className={styles.main}
        style={{
          backgroundImage: "url(/assets/5.webp)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
        }}
      >
        <Carousel
            showThumbs={false}
            showIndicators={false}
            infiniteLoop={true}
            showStatus={false}
            className={styles.carousel}
          >
            {team.map((item, i) => (
              <TeamCard
                key={i}
                name={item.name}
                imageSrc={item.itemSrc}
                title={item.title}
                text={item.text}
                {...item}
              />
            ))}
          </Carousel>
      </main>
      <Footer />
    </div>
  );
}
export default OutTeam;
