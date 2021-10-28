import React from "react";
import styles from "./TeamCard.module.css";

export type TeamCardProps = {
  imageSrc: string;
  firstName: string;
  familyName: string;
  text: string;
};

const TeamCard = ({
  imageSrc,
  firstName,
  familyName,
  text,
}: TeamCardProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <img src={imageSrc} className={styles.image} />
      </div>
      <article className={styles.articleWrapper}>
        <h2 className={styles.name}>
          {firstName} <span>{familyName}</span>{" "}
        </h2>
        <p className={styles.text}>{text}</p>
      </article>
    </div>
  );
};

export default TeamCard;
