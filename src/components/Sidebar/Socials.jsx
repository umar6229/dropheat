"use client";
import * as React from "react";
import styles from "./Socials.module.css";
import SocialIcon from "./SocialIcon";

function Socials() {
  const socialLinks = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6a57cee328ca7b23b6d32bfa18b8d6c45af8e701?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed", alt: "Social Media", className: styles.img },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/8f72713d00b41012ce29641f4ef351f6a06f9bd1?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed", alt: "Social Media", className: styles.img2 },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4a502636b9751e1842e7f9807ece31fc5c017a7d?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed", alt: "Social Media", className: styles.img3 },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/21ca541802cf90d4f69b1c582beed173a7799734?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed", alt: "Social Media", className: styles.img4 },
  ];

  return (
    <nav className={styles.socials} aria-label="Social media links">
      <div className={styles.socialIconsContainer}>
        {socialLinks.map((link, index) => (
          <SocialIcon
            key={index}
            src={link.src}
            alt={link.alt}
            className={link.className}
          />
        ))}
      </div>
    </nav>
  );
}

export default Socials;
