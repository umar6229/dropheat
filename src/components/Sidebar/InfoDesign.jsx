"use client";
import * as React from "react";
import styles from "./InfoDesign.module.css";
import InfoStack from "./InfoStack";

function InfoDesign() {
  return (
    <section
      className={styles.inputDesignSection}
      role="region"
      aria-label="Product image gallery"
    >
      <InfoStack />
    </section>
  );
}

export default InfoDesign;
