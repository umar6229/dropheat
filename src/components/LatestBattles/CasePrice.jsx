"use client";
import React from "react";
import styles from "./CasePrice.module.css";

const CasePrice = ({ price }) => {
  return (
    <div className={styles.priceSection}>
      <p className={styles.price}>
        <span>${price}</span>
        <span className={styles.cents}>.00</span>
      </p>
      <button className={styles.openButton}>Open case</button>
    </div>
  );
};

export default CasePrice;
