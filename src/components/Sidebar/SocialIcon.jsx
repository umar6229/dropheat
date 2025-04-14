"use client";
import * as React from "react";
import styles from "./Socials.module.css";

const SocialIcon = ({ src, alt, className }) => {
  return (
    <a
      href="#"
      className={styles.socialLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit our ${alt} page`}
    >
      <img src={src} alt={`${alt} icon`} className={className} loading="lazy" />
    </a>
  );
};

export default SocialIcon;
