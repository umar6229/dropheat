import React from "react";
import styles from "./LiveDrops.module.css";

const UserBadge = ({ avatar, username }) => {
  return (
    <div className={styles.userBadge}>
      <img
        src={avatar}
        alt={`${username}'s avatar`}
        className={styles.userAvatar}
      />
      <span className={styles.username}>{username}</span>
    </div>
  );
};

export default UserBadge;
