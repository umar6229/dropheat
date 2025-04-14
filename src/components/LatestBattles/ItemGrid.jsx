import React from "react";
import styles from "./ItemGrid.module.css";

const ItemGrid = ({ items }) => {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.itemGrid}>
        {items.map((item, index) => (
          <img key={index} src={item} alt="" className={styles.itemImage} />
        ))}
      </div>
    </div>
  );
};

export default ItemGrid;
