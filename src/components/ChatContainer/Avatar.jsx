import React from "react";
import styles from "./Avatar.module.css";

const Avatar = ({ image, altText }) => {
  return <img src={image} alt={altText} className={styles.avatar} />;
};

export default Avatar;
