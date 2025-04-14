"use client";
import React from "react";
import UserInfo from "./UserInfo";
import ImageGallery from "./ImageGallery";
import StarRating from "./StarRating";
import styles from "./PostCard.module.css";

const PostCard = ({ user, timeAgo, title, content, images }) => {
  return (
    <article className={styles.card}>
      <header className={styles.cardHeader}>
        <UserInfo user={user} />
        <time className={styles.timestamp}>{timeAgo}</time>
      </header>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>
          {content.split("@HypeDrop").map((part, index) => {
            if (index === 0) return part;
            return (
              <React.Fragment key={index}>
                <a
                  href="https://twitter.com/HypeDrop"
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @HypeDrop
                </a>
                {part}
              </React.Fragment>
            );
          })}
        </p>
      </div>
      <ImageGallery images={images} />
      <StarRating />
    </article>
  );
};

export default PostCard;
