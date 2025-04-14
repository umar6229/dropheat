import React from "react";
import styles from "./ChatHeader.module.css";

const ChatHeader = () => {

  const handleChatBox = ()=>{
    const box = document.getElementById("chat-container");
    if(box?.style?.display === "none"){
      box.style.display= "block"
    }else{
      box.style.display = "none"
    }
  }

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Chat</h1>
      <div className={styles.statusWrapper}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.2" cx="8" cy="8" r="8" fill="#B1FF62"/>
<circle cx="8" cy="8" r="3" fill="#B1FF62"/>
</svg>

        <span className={styles.onlineCount}>12, 490</span>
        <button className={styles.hideButton} aria-label="Hide chat" onClick={handleChatBox}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a15de6b120821e41e82c9e021f91270b4d681f1?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed" alt="Hide chat icon" className={styles.hideIcon} />
        </button>
      </div>
    </header>
  );
};

export default ChatHeader;
