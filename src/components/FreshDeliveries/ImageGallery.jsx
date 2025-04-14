import React from "react";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ images }) => {
  return (
    <div className={styles.gallery}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Gallery image ${index + 1}`}
          className={styles.galleryImage}
        />
      ))}
    </div>
  );
};

export default ImageGallery;
