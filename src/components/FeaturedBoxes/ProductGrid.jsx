"use client";
import React from "react";
import styles from "./ProductGrid.module.css";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      tags: ["New", "Hot", "Popular"],
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/78055c7a754e12b344edc09002c0cbe573eaa42e",
      title: "Crazy Designers",
      categories: ["Streetwear", "Watches"],
      price: 390,
      buttonText: "Open case",
    },
    {
      id: 2,
      tags: ["New"],
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/6bc5e8822cd9a8eaf4a8f9d7ed42f91ce9d31d24",
      title: "Crazy Designers",
      categories: ["Streetwear", "Watches"],
      price: 390,
      buttonText: "Open Box",
    },
    {
      id: 3,
      tags: [],
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/bde59fcfbdd0a3a63e1d18a7dfd8c7f2431aeff4",
      title: "Crazy Designers",
      categories: ["Streetwear", "Watches"],
      price: 390,
      buttonText: "Open case",
    },
    {
      id: 4,
      tags: ["Popular"],
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/69b2d038621ad37f1a5c7975aad265598273af6d",
      title: "Card Trader",
      categories: ["Streetwear", "Watches"],
      price: 50,
      buttonText: "Open Box",
    },
    {
      id: 5,
      tags: [],
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/78055c7a754e12b344edc09002c0cbe573eaa42e",
      title: "Crazy Designers",
      categories: ["Streetwear", "Watches"],
      price: 390,
      buttonText: "Open case",
    },
    {
      id: 6,
      tags: ["New"],
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/6bc5e8822cd9a8eaf4a8f9d7ed42f91ce9d31d24",
      title: "Crazy Designers",
      categories: ["Streetwear", "Watches"],
      price: 390,
      buttonText: "Open case",
    },
    {
      id: 7,
      tags: [],
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/7d9804a528250246ccb1a56e95d78bd1a18cb107",
      title: "Crazy Designers",
      categories: ["Streetwear", "Watches"],
      price: 390,
      buttonText: "Open Box",
    },
    {
      id: 8,
      tags: ["Popular"],
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/69b2d038621ad37f1a5c7975aad265598273af6d",
      title: "Card Trader",
      categories: ["Streetwear", "Watches"],
      price: 50,
      buttonText: "Open case",
    },
    {
      id: 9,
      tags: ["Hot"],
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/bde59fcfbdd0a3a63e1d18a7dfd8c7f2431aeff4",
      title: "Crazy Designers",
      categories: ["Streetwear", "Watches"],
      price: 390,
      buttonText: "Open Box",
    },
    {
      id: 10,
      tags: [],
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/7d9804a528250246ccb1a56e95d78bd1a18cb107",
      title: "Crazy Designers",
      categories: ["Streetwear", "Watches"],
      price: 390,
      buttonText: "Open case",
    },
  ];

  return (
    <section className={styles.productGrid} aria-label="Product Grid">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </section>
  );
};

export default ProductGrid;
