import React from "react";
import styles from "./Sidebar.module.css";

function MenuItems() {
  return (
    <nav className={styles.menuitems} aria-label="Main menu">
      <button aria-label="Menu item 1">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b8e5190e7440bb62fb8c4f709a99dd65d9b8a97?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed" alt="Menu icon 1" className={styles.img} />
      </button>
      <button aria-label="Menu item 2">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/284459b74115b545245089d9fd0058a823571fa6?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed" alt="Menu icon 2" className={styles.img2} />
      </button>
      <button aria-label="Menu item 3">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/43d979296da909dce0d58cf9cbbfe3b4f379b5bf?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed" alt="Menu icon 3" className={styles.img3} />
      </button>
      <button aria-label="Menu item 4">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b9bd356f7efcf2a2e75e3e07022621678f5a642?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed" alt="Menu icon 4" className={styles.img4} />
      </button>
      <button aria-label="Menu item 5">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/796919571df7462b273491e2fc1aaafe390aac9a?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed" alt="Menu icon 5" className={styles.img5} />
      </button>
      <button aria-label="Menu item 6">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ebc3a30347fb74c1229be9f854bbccffbf1d20c6?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed" alt="Menu icon 6" className={styles.img6} />
      </button>
    </nav>
  );
}

export default MenuItems;
