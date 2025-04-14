import React from "react";
import styles from "./MainHeader.module.css";

const NavigationItem = ({ icon, label, href }) => {
  return (
    <li className={styles.navItem}>
      <a href={href} className={styles.navLink} aria-label={label}>
        <span className={styles.navIcon} aria-hidden="true">
          {icon}
        </span>
        <span className={styles.navLabel}>{label}</span>
      </a>
    </li>
  );
};

export default NavigationItem;
