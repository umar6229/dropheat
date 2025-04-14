import React from "react";
import styles from "./UserInfo.module.css";

const UserInfo = ({ user }) => {
  return (
    <div className={styles.userInfo}>
      <img src={user.avatar} alt={user.name} className={styles.avatar} />
      <div className={styles.userDetails}>
        <h3 className={styles.name}>{user.name}</h3>
        <p className={styles.handle}>{user.handle}</p>
      </div>
    </div>
  );
};

export default UserInfo;
