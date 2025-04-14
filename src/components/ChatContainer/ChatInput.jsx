import React from "react";
import styles from "./ChatInput.module.css";

const ChatInput = () => {
  return (
    <footer className={styles.inputWrapper}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Enter your message"
          className={styles.messageInput}
          aria-label="Type a message"
        />
        <div className={styles.actionButtons}>
          <button className={styles.attachButton} aria-label="Attach file">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4653fd94329189b68e3090f09db6255ed4786590?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed"
              alt="Attach file"
              className={styles.attachIcon}
            />
          </button>
          <button className={styles.sendButton} aria-label="Send message">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/59df5da90cd8adb511d49733184a360e56434bca?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed" alt="Send message" className={styles.sendIcon} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default ChatInput;
