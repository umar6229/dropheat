"use client";
import * as React from "react";
import styles from "./HeaderAllBoxes.module.css";
import CaseList from "./CaseList";

function HeaderAllBoxes() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.titleWrapper}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9370ca06bce5819140d3b85f6d69838169c9e4e?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed"
          className={styles.battleIcon}
          alt="Battles icon"
        />
        <h2 className={styles.title}>Latest Battles</h2>
        <button className={styles.viewAllButton}>View All</button>
      </div>
      {/* <div> */}
      <CaseList />
      {/* </div> */}
    </div>
  );
}

export default HeaderAllBoxes;
