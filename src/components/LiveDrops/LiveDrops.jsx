"use client";
import React from "react";
import styles from "./LiveDrops.module.css";
import LiveDropCard from "./LiveDropCard";

const DROPS_DATA = [
  {
    id: 1,
    price: "10.00",
    accentColor: "#39ff88",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3beea5b90d47551eb90e8cfdc211dcac59e41e6f?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed",
    userAvatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5cae4183f3e3ad39026ca81cc898935b7df19edc?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed",
  },
  {
    id: 2,
    price: "289.00",
    accentColor: "#ff39df",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/182c819dee593f87573dd1f926ffe50f6b6329fb?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed",
    userAvatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5cae4183f3e3ad39026ca81cc898935b7df19edc?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed",
  },
  {
    id: 3,
    price: "110.00",
    accentColor: "#3fa1fc",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c0e24e5c5a0bc8a40312fd8506a8f54691fb7617?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed",
    userAvatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5cae4183f3e3ad39026ca81cc898935b7df19edc?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed",
  },
  {
    id: 4,
    price: "5.00",
    accentColor: "#7d7d7d",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/90e254e57baeb787082acd3d6b085be879ebf241?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed",
    userAvatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5cae4183f3e3ad39026ca81cc898935b7df19edc?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed",
  },
  {
    id: 5,
    price: "289.00",
    accentColor: "#ff39df",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0149728347a6dfaeb49cff1d21f79f59886a25ef?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed",
    userAvatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5cae4183f3e3ad39026ca81cc898935b7df19edc?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed",
  },
  {
    id: 6,
    price: "124.05",
    accentColor: "#3fa1fc",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/436fa7025bdfea32f61d5cfe7e55218302b6d8ad?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed",
    userAvatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5cae4183f3e3ad39026ca81cc898935b7df19edc?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed",
  },
  {
    id: 7,
    price: "9",
    accentColor: "#7d7d7d",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/182c819dee593f87573dd1f926ffe50f6b6329fb?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed",
    userAvatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5cae4183f3e3ad39026ca81cc898935b7df19edc?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed",
  },
  {
    id: 8,
    price: "7",
    accentColor: "#7d7d7d",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/182c819dee593f87573dd1f926ffe50f6b6329fb?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed",
    userAvatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5cae4183f3e3ad39026ca81cc898935b7df19edc?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed",
  },
];

const LiveDrops = () => {
  return (
    <section className={styles.livedrops} aria-label="Live drops section">
      <h2 className={styles.title}>Live drops</h2>
      <div
        className={styles.dropsContainer}
        role="list"
        aria-label="Scrollable list of live drops"
        tabIndex={0}
      >
        {DROPS_DATA.map((drop) => (
          <div key={drop.id} role="listitem">
            <LiveDropCard
              accentColor={drop.accentColor}
              imageUrl={drop.imageUrl}
              price={drop.price}
              userName="MsGreedy"
              userAvatar={drop.userAvatar}
            />
          </div>
        ))}
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c6fd7ab494cb3ac84050d8593f0dba62644d225?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed"
          alt="Live drops decoration"
          className={styles.decorationImage}
        />
      </div>
    </section>
  );
};

export default LiveDrops;
