import React from "react";
import styles from "./Sidebar.module.css";

function UserActions() {
  return (
    <section className={styles.div} aria-label="User actions">
      <button aria-label="User action 1">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/94e1ff1d96d3d171aeeddd4fe6009d1707ffef0c?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed" alt="User action icon 1" className={styles.img7} />
      </button>
      <button aria-label="User action 2">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2efe8bc4650f9993c4fb9ef89f21b9982d98c71?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed" alt="User action icon 2" className={styles.img8} />
      </button>
      <button aria-label="User action 3">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/a950124006b18d2ddfcbf5cb73fce4ee510cf5b4?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed" alt="User action icon 3" className={styles.img9} />
      </button>
      <button aria-label="User action 4">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/180f919fe18fc13c74f612d15fe9e6ad83207545?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed" alt="User action icon 4" className={styles.img10} />
      </button>
    </section>
  );
}

export default UserActions;
