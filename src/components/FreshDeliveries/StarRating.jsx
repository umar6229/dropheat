import React from "react";
import styles from "./StarRating.module.css";

const StarRating = () => {
  return (
    <div className={styles.rating}>
      {[...Array(5)].map((_, index) => (
        <img
          key={index}
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b75d5d5120b3d13fa7291351513ab2dff48aac0?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed"
          alt="Star rating"
          className={styles.star}
        />
      ))}
    </div>
  );
};

export default StarRating;
