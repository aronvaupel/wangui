import React from 'react';
import styles from './TeamCard.module.css';


export type TeamCardProps = {
  imageSrc: string;
  name: string;
  title: string;
  text: string;
};

const TeamCard = ({
  imageSrc,
  name,
  title,
  text
}: TeamCardProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <img src={imageSrc} className={styles.image} />
        </div>
        <article className={styles.articleWrapper}>
            <h2 className={styles.name}>{name}</h2>
           <h3 className={styles.title}>{title}</h3>
           <p className={styles.text}>{text}</p>
        </article>
    </div>
  );
};

export default TeamCard;