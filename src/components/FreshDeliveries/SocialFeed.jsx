"use client";
import React from "react";
import PostCard from "./PostCard";
import styles from "./SocialFeed.module.css";

const SocialFeed = () => {
  const posts = [
    {
      id: 1,
      user: {
        avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/d0e3a5d8e342544e77e1999cf24101e1ec80e4e2?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed",
        name: "Andr Grown",
        handle: "@users9384",
      },
      timeAgo: "3 hours ago",
      title: "Best serivce I ever used",
      content:
        "It finally arrived. TY @HypeDrop Lemme know which case I should open to honor this moment",
      images: ["https://cdn.builder.io/api/v1/image/assets/TEMP/a574ba1ac1bbc0b5e5994c3ab62acc057d946861?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed", "https://cdn.builder.io/api/v1/image/assets/TEMP/2a24a2269092be11d22fec0934b857079288515c?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed", "https://cdn.builder.io/api/v1/image/assets/TEMP/3852c24eb3c7b75176c63a616638d8ab7c3a405d?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed"],
    },
    {
      id: 2,
      user: {
        avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/d18a1671b7d111c193d7ab593eafcda1cc065ab8?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed",
        name: "Andr Grown",
        handle: "@users9384",
      },
      timeAgo: "3 hours ago",
      title: "Best serivce I ever used",
      content:
        "It finally arrived. TY @HypeDrop Lemme know which case I should open to honor this moment",
      images: ["https://cdn.builder.io/api/v1/image/assets/TEMP/8275ba023b50971b0d69d0ab9154f207ccf2a73f?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed", "https://cdn.builder.io/api/v1/image/assets/TEMP/e7668ddd2f5bb61d41bafed1ae93133226de4fa1?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed", "https://cdn.builder.io/api/v1/image/assets/TEMP/d8f03a9806bb86101cca2727d55308f2ebb83a34?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed"],
    },
    {
      id: 3,
      user: {
        avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/32ed6a25f56b7041ae5c6ac3ef8088d66dba0f5a?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed",
        name: "Andr Grown",
        handle: "@users9384",
      },
      timeAgo: "3 hours ago",
      title: "Best serivce I ever used",
      content:
        "It finally arrived. TY @HypeDrop Lemme know which case I should open to honor this moment",
      images: ["https://cdn.builder.io/api/v1/image/assets/TEMP/a2dc7c762d1545adfc4db48d36fc06b8d770c29a?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed", "https://cdn.builder.io/api/v1/image/assets/TEMP/edeb84f31f62872a031125d0d13bffca9efdfffa?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed", "https://cdn.builder.io/api/v1/image/assets/TEMP/7038b74111fcb73d221cdafe0971bd48389ff336?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed"],
    },
    {
      id: 4,
      user: {
        avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/8c834f9c1d67a63b9f2b3531bf0e5143724a5822?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed",
        name: "Andr Grown",
        handle: "@users9384",
      },
      timeAgo: "3 hours ago",
      title: "Best serivce I ever used",
      content:
        "It finally arrived. TY @HypeDrop Lemme know which case I should open to honor this moment",
      images: ["https://cdn.builder.io/api/v1/image/assets/TEMP/05fee0fcf9390bf00f5a0910b93bbb213c9af55c?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed", "https://cdn.builder.io/api/v1/image/assets/TEMP/4f649ab98e204533f5fa565d11c7f7ee068de29b?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed", "https://cdn.builder.io/api/v1/image/assets/TEMP/5a2fdc4cfd790e3421cbfe2692695a3ab525753c?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed"],
    },
  ];

  return (
    <section className={styles.feedContainer}>
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </section>
  );
};

export default SocialFeed;
