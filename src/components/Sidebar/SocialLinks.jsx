import React from "react";
import styles from "./Sidebar.module.css";

function SocialLinks() {
  return (
    <footer className={styles.socials} aria-label="Social media links">
      <nav>
        <a href="#" aria-label="Social media link 1">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a57cee328ca7b23b6d32bfa18b8d6c45af8e701?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed"
            alt="Social media icon 1"
            className={styles.img11}
          />
        </a>
        <a href="#" aria-label="Social media link 2">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f72713d00b41012ce29641f4ef351f6a06f9bd1?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed"
            alt="Social media icon 2"
            className={styles.img12}
          />
        </a>
        <a href="#" aria-label="Social media link 3">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a502636b9751e1842e7f9807ece31fc5c017a7d?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed"
            alt="Social media icon 3"
            className={styles.img13}
          />
        </a>
        <a href="#" aria-label="Social media link 4">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/21ca541802cf90d4f69b1c582beed173a7799734?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed"
            alt="Social media icon 4"
            className={styles.img14}
          />
        </a>
      </nav>
    </footer>
  );
}

export default SocialLinks;
