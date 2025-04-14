import React from "react";
import styles from "./CaseItem.module.css";
import PlayerAvatars from "./PlayerAvatars";
import ItemGrid from "./ItemGrid";
import CasePrice from "./CasePrice";

const CaseItem = ({ leftAvatars, rightAvatars, items, price }) => {
  return (
    <article className={styles.caseItem}>
      <PlayerAvatars leftAvatars={leftAvatars} rightAvatars={rightAvatars} />
      <ItemGrid items={items} />
      <CasePrice price={price} />
    </article>
  );
};

export default CaseItem;
