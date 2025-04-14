import React from "react";
import styles from "./LiveDrops.module.css";

const PriceDisplay = ({ price }) => {
  const [dollars, cents] = price.toString().split(".");

  return (
    <p className={styles.priceText}>
      <span className={styles.dollars}>${dollars}</span>
      {cents && <span className={styles.cents}>.{cents}</span>}
    </p>
  );
};

export default PriceDisplay;
