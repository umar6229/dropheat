"use client";
import * as React from "react";
import styles from "./InfoDesign.module.css";
import InfoItem from "./InfoItem";

const InfoStack = () => {
  const images = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/94e1ff1d96d3d171aeeddd4fe6009d1707ffef0c?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed", className: styles.img },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b2efe8bc4650f9993c4fb9ef89f21b9982d98c71?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed", className: styles.img2 },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a950124006b18d2ddfcbf5cb73fce4ee510cf5b4?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed", className: styles.img3 },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/180f919fe18fc13c74f612d15fe9e6ad83207545?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed", className: styles.img4 },
  ];

  return (
    <div className={styles.imageStack} role="group" aria-label="Product images">
      {images.map((image, index) => (
        <InfoItem
          key={index}
          src={image.src}
          className={image.className}
          index={index}
        />
      ))}
    </div>
  );
};

export default InfoStack;
