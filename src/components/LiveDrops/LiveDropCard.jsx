"use client";
import React from "react";
import styles from "./LiveDrops.module.css";
import PriceDisplay from "./PriceDisplay";
import UserBadge from "./UserBadge";

const LiveDropCard = ({
  accentColor,
  imageUrl,
  price,
  userName,
  userAvatar,
}) => {
  return (
    <article className={styles.dropCard}>
      <div
        className={styles.accentLine}
        style={{ backgroundColor: accentColor }}
        aria-hidden="true"
      />
      <div className={styles.cardContent}>
        <img
          src={imageUrl}
          alt={`Product thumbnail for ${price}`}
          className={styles.productImage}
        />
        <div className={styles.cardInfo}>
          <PriceDisplay price={price} />
          <UserBadge avatar={userAvatar} username={userName} />
        </div>
      </div>
    </article>
  );
};

export default LiveDropCard;
