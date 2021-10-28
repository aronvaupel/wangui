import React from "react";
import styles from "./TeamCard.module.css";

export type TeamCardProps = {
  imageSrc: string;
  firstName: string;
  familyName: string;
  text: string;
  type: "mobile" | "desktop";
};

const TeamCard = ({
  imageSrc,
  firstName,
  familyName,
  text,
  type,
}: TeamCardProps): JSX.Element => {
  return (
    <div
      className={` ${
        type === "mobile" ? styles.wrapper : styles.wrapperDesktop
      }`}
    >
      <div
        className={` ${
          type === "mobile" ? styles.gapMaker : styles.gapMakerDesktop
        }`}
      >
        <div
          className={` ${
            type === "mobile" ? styles.imageWrapper : styles.imageWrapperDesktop
          }`}
        >
          <img
            src={imageSrc}
            className={` ${
              type === "mobile" ? styles.image : styles.imageDesktop
            }`}
          />
        </div>
        <article
          className={` ${
            type === "mobile"
              ? styles.articleWrapper
              : styles.articleWrapperDesktop
          }`}
        >
          <h3
            className={` ${
              type === "mobile" ? styles.name : styles.nameDesktop
            }`}
          >
            {firstName} <span>{familyName}</span>{" "}
          </h3>
          <p
            className={` ${
              type === "mobile" ? styles.text : styles.textDesktop
            }`}
          >
            {text}
          </p>
        </article>
      </div>
    </div>
  );
};

export default TeamCard;
