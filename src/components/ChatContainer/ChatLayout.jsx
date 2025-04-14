"use client";
import React from "react";
import styles from "./ChatLayout.module.css";
// import ChatHeader from "./ChatHeader";
// import MessagesList from "./MessagesList";
// import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";

const ChatLayout = () => {
  return (
    <div
      className={styles.chatContainer}
      role="region"
      aria-label="Chat interface"
    >
      <ChatHeader />
      <ChatMessages />
      <ChatInput />
    </div>
  );
};

export default ChatLayout;
