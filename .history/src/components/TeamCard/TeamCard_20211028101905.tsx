import React from "react";
import styles from "./TeamCard.module.css";

export type TeamCardProps = {
  imageSrc: string;
  firstName: string;
  familyName: string;
  text: string;
  type: 'mobile' | 'desktop';
};

const TeamCard = ({
  imageSrc,
  firstName,
  familyName,
  text,
  type
}: TeamCardProps): JSX.Element => {
  return (
    <div className={` ${
                type === 'mobile' ? styles.wrapper : styles.wrapperDesktop
              }`}>
        <div className={styles.gapMaker}>
      <div className={styles.imageWrapper}>
        <img src={imageSrc} className={styles.image} />
      </div>
      <article className={styles.articleWrapper}>
        <h3 className={styles.name}>
          {firstName} <span>{familyName}</span>{" "}
        </h3>
        <p className={styles.text}>{text}</p>
      </article></div>
    </div>
  );
};

export default TeamCard;
