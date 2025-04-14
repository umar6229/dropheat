"use client";
import React from "react";
import styles from "./CaseList.module.css";
import CaseItem from "./CaseItem";

const CaseList = () => {
  const cases = [
    {
      id: 1,
      leftAvatars: ["https://cdn.builder.io/api/v1/image/assets/TEMP/25102516a008b290ae7f0b1f664b1d46de5992a2", "https://cdn.builder.io/api/v1/image/assets/TEMP/565868feea136dfcbd69b671eb7d10a68de82ba8"],
      rightAvatars: ["https://cdn.builder.io/api/v1/image/assets/TEMP/2f784af0be704d3369e7ff7a5b181b28229c9673", "https://cdn.builder.io/api/v1/image/assets/TEMP/9be3b9a13383e38181ae009432bc1b45cf6c80a5"],
      items: [
        "https://cdn.builder.io/api/v1/image/assets/TEMP/eaae22e57d4084447bec6e1554cad58417a68bd8",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/75c4a0e8be53cd789857eae1053f46b097172def",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/eaae22e57d4084447bec6e1554cad58417a68bd8",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3570c6d4d8018116f0a34e53961fa35423cb09de",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6fd8e3390e9679e79e761135931ccc98591e94f2",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/eaae22e57d4084447bec6e1554cad58417a68bd8",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0e78e0cb28b5c00595c3bb39615a65804401a753",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0e78e0cb28b5c00595c3bb39615a65804401a753",
      ],
      price: 390,
    },
    {
      id: 2,
      leftAvatars: ["https://cdn.builder.io/api/v1/image/assets/TEMP/9f57dbb4c7cb01850c24bf8cc5020c0bfda8f818", "https://cdn.builder.io/api/v1/image/assets/TEMP/3b860f49500d7af2151147b0905765fbef3e3ee1"],
      rightAvatars: ["https://cdn.builder.io/api/v1/image/assets/TEMP/559c219c92a6d37a65eac39ec942cbf223c747ba", "https://cdn.builder.io/api/v1/image/assets/TEMP/9d6aaf77f12581a740aae7a05584bf30710386df"],
      items: [
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d7cf20ab4c24d4301026053a96e9de4624835380",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/fa2d79dc1b2533455ed59af33b1c74568ee98b70",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/39af914ce057ff74ed501e1ecd8b350967a161e9",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9ff1cd9b2fd0e179599246f2d8dc7c380c82d304",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5440329fdcc00c7e92d4f6ae800ad748f50b22b8",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9af17476c64b7375de85a75c2c2801bcd7f99fbe",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c5bbb60d1427f73b6bb83b60b03c94587906381f",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/365397223da901f508edafcb6b9681ecf3851e7f",
      ],
      price: 390,
    },
    {
      id: 3,
      leftAvatars: ["https://cdn.builder.io/api/v1/image/assets/TEMP/a7b4d064b81eccd2b8b3afdb9975ad07e462d8f4", "https://cdn.builder.io/api/v1/image/assets/TEMP/28070c6539666cb8ffab392d727553e16d012618"],
      rightAvatars: ["https://cdn.builder.io/api/v1/image/assets/TEMP/7f4ac418f41a7bc445dce796d10609b41017051f", "https://cdn.builder.io/api/v1/image/assets/TEMP/6cf99dd918b127e55966a06b3aae5ed62a848a21"],
      items: [
        "https://cdn.builder.io/api/v1/image/assets/TEMP/cd161cf9991a0d0ce91eb7dd575589ef4513269a",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/75c4a0e8be53cd789857eae1053f46b097172def",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4134f9f34e38358c8cacb664d97779d3078b8b7f",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3570c6d4d8018116f0a34e53961fa35423cb09de",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/fa2d79dc1b2533455ed59af33b1c74568ee98b70",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/68206a110b2024a175c90e871889115dc2d4111b",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/16aad33e28ab96ff5ff1c024727e65698919833a",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0e78e0cb28b5c00595c3bb39615a65804401a753",
      ],
      price: 390,
    },
    {
      id: 4,
      leftAvatars: ["https://cdn.builder.io/api/v1/image/assets/TEMP/d5e7f5c7201640c10f40374f53a99147d3675651", "https://cdn.builder.io/api/v1/image/assets/TEMP/56512074d0de60a64511f8e0eb4bbfcc93750cf3"],
      rightAvatars: ["https://cdn.builder.io/api/v1/image/assets/TEMP/8b1fa09ad12d74973cecdacdbc6fe4defe3edf21", "https://cdn.builder.io/api/v1/image/assets/TEMP/c18d53e96aaa92467a83eb64f9eb5f29c749eb5c"],
      items: [
        "https://cdn.builder.io/api/v1/image/assets/TEMP/eaae22e57d4084447bec6e1554cad58417a68bd8",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/68206a110b2024a175c90e871889115dc2d4111b",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/eaae22e57d4084447bec6e1554cad58417a68bd8",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3570c6d4d8018116f0a34e53961fa35423cb09de",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6fd8e3390e9679e79e761135931ccc98591e94f2",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/eaae22e57d4084447bec6e1554cad58417a68bd8",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/fa2d79dc1b2533455ed59af33b1c74568ee98b70",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0e78e0cb28b5c00595c3bb39615a65804401a753",
      ],
      price: 390,
    },
    {
      id: 5,
      leftAvatars: ["https://cdn.builder.io/api/v1/image/assets/TEMP/39e98499d0fa2b5eee9859e38c14b71434a7ab9a", "https://cdn.builder.io/api/v1/image/assets/TEMP/262ae1010ff4440249878890cabb37283834bb99"],
      rightAvatars: ["https://cdn.builder.io/api/v1/image/assets/TEMP/056b71067ff089e27db83aa0405c0ac7414a053e", "https://cdn.builder.io/api/v1/image/assets/TEMP/7e4e42f59740f18e1f8bfd24f71c9230a139d0cd"],
      items: [
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5ca94bd8b2f44dd3e1937abac8006cc9d5b65de8",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/75c4a0e8be53cd789857eae1053f46b097172def",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/fa2d79dc1b2533455ed59af33b1c74568ee98b70",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5226b73105ad8ed717f55c893cdc3ebcf966f9b3",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5ca94bd8b2f44dd3e1937abac8006cc9d5b65de8",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/cd161cf9991a0d0ce91eb7dd575589ef4513269a",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0e78e0cb28b5c00595c3bb39615a65804401a753",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/16aad33e28ab96ff5ff1c024727e65698919833a",
      ],
      price: 390,
    },
    {
      id: 6,
      leftAvatars: ["https://cdn.builder.io/api/v1/image/assets/TEMP/540956299a61037358b08dcabf498d4a05a828b5", "https://cdn.builder.io/api/v1/image/assets/TEMP/fba7d9baa58bd971987769c65af79eb2be2e336d"],
      rightAvatars: ["https://cdn.builder.io/api/v1/image/assets/TEMP/262aedc04e982d0ba70d21755dd18f54fcb89100", "https://cdn.builder.io/api/v1/image/assets/TEMP/a83fcb4da087abf498877e0ea9f9e6fbfca05c95"],
      items: [
        "https://cdn.builder.io/api/v1/image/assets/TEMP/eaae22e57d4084447bec6e1554cad58417a68bd8",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/16aad33e28ab96ff5ff1c024727e65698919833a",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/cd161cf9991a0d0ce91eb7dd575589ef4513269a",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/fc3b7c66b888addac6f7d21f985aa1398ede0063",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6fd8e3390e9679e79e761135931ccc98591e94f2",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/eaae22e57d4084447bec6e1554cad58417a68bd8",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/fa2d79dc1b2533455ed59af33b1c74568ee98b70",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5ca94bd8b2f44dd3e1937abac8006cc9d5b65de8",
      ],
      price: 390,
    },
  ];

  return (
    <section className={styles.caseList}>
      {cases.map((caseItem) => (
        <CaseItem
          key={caseItem.id}
          leftAvatars={caseItem.leftAvatars}
          rightAvatars={caseItem.rightAvatars}
          items={caseItem.items}
          price={caseItem.price}
        />
      ))}
    </section>
  );
};

export default CaseList;
