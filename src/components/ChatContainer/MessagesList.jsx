import React from "react";
import styles from "./MessagesList.module.css";
import MessageItem from "./ChatMessage";

const messages = [
  {
    id: 1,
    avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/c3d458683dd03972f4addde89319026646a5d001?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed",
    username: "MsGreedy",
    time: "10:13",
    message: "its been an hour window since it sarted they just always",
  },
  {
    id: 2,
    avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/381ecded40295ee9adf78f9b0a26515eb8ab961c?placeholderIfAbsent=true&apiKey=9c2f97d1ffd74a6ba434981ddbfe62ed",
    username: "coolmate",
    time: "10:13",
    message: "Hello all friends",
  },
  // ... more messages following the same pattern
];

const MessagesList = () => {
  return (
    <main
      className={styles.messagesContainer}
      role="log"
      aria-label="Chat messages"
    >
      <div className={styles.messagesList}>
        {messages.map((message) => (
          <MessageItem
            key={message.id}
            avatar={message.avatar}
            username={message.username}
            time={message.time}
            message={message.message}
          />
        ))}
      </div>
    </main>
  );
};

export default MessagesList;
