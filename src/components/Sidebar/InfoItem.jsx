"use client";
import * as React from "react";
// import styles from "./InputDesign.module.css";

const InfoItem = ({ src, className, index }) => {
  return (
    <img
      src={src}
      className={className}
      alt={`Product image ${index + 1}`}
      loading="lazy"
      role="img"
    />
  );
};

export default InfoItem;
