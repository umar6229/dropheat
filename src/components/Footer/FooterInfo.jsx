"use client";
import React from "react";
import styles from "./FooterInfo.module.css";
import RatingStars from "./RatingStars";
import PolicyLinks from "./PolicyLinks";
import SocialMediaIcons from "./SocialMediaIcons";

const FooterInfo = () => {
  return (
    <footer className={styles.footerContainer}>
      <RatingStars />
      <PolicyLinks />
      <SocialMediaIcons />
    </footer>
  );
};

export default FooterInfo;
