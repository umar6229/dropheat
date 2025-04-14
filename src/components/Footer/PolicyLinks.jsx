import React from "react";
import styles from "./FooterInfo.module.css";

const policyLinks = [
  "AML Policy",
  "Cookie Policy",
  "Contact",
  "Terms Of Service",
  "Blog",
  "FAQ",
  "Provably Fair",
  "Privacy Statement",
];

const PolicyLinks = () => {
  return (
    <nav className={styles.policyLinksContainer}>
      {policyLinks.map((link, index) => (
        <div key={index} className={styles.policyLinkItem}>
          <span className={styles.policyDot} aria-hidden="true" />
          <a href="#" className={styles.policyLink}>
            {link}
          </a>
        </div>
      ))}
    </nav>
  );
};

export default PolicyLinks;
