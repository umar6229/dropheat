import React from "react";
import styles from "./ProductGrid.module.css";

const ProductTag = ({ type }) => {
  const tagStyles = {
    New: styles.tagNew,
    Hot: styles.tagHot,
    Popular: styles.tagPopular,
  };

  return (
    <span
      className={`${styles.tag} ${tagStyles[type]}`}
      aria-label={`${type} product`}
    >
      {type}
    </span>
  );
};

export default ProductTag;
