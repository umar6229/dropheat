import React from "react";
import styles from "./ProductGrid.module.css";
import ProductTag from "./ProductTag";

const ProductCard = ({ tags, image, title, categories, price, buttonText }) => {
  return (
    <article className={styles.productCard}>
      {tags.length > 0 && (
        <div className={styles.tagContainer}>
          {tags.map((tag, index) => (
            <ProductTag key={index} type={tag} />
          ))}
        </div>
      )}

      <div className={styles.imageContainer}>
        <img
          src={image}
          alt={`${title} product`}
          className={styles.productImage}
        />
      </div>

      <div className={styles.productDetails}>
        <h2 className={styles.productTitle}>{title}</h2>
        <div className={styles.categoryContainer}>
          {categories.map((category, index) => (
            <span key={index} className={styles.category}>
              {category}
            </span>
          ))}
        </div>
        <div className={styles.priceContainer}>
          <span className={styles.priceAmount}>${price}</span>
          <span className={styles.priceCents}>.00</span>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.primaryButton}>{buttonText}</button>
          <button className={styles.secondaryButton}>Info</button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
