import React from "react";
import Avatar from "./Avatar";
import styles from "./ChatMessage.module.css";

const ChatMessage = ({ avatar, username, timestamp, content }) => {
  return (
    <article className={styles.messageContainer}>
      <Avatar image={avatar} altText={`${username}'s avatar`} />
      <div className={styles.messageContent}>
        <div className={styles.messageHeader}>
          <span className={styles.username}>{username}</span>
          <time className={styles.timestamp}>{timestamp}</time>
        </div>
        <p className={styles.messageText}>{content}</p>
      </div>
    </article>
  );
};

export default ChatMessage;
