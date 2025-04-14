"use client";
import React from "react";
import ChatMessage from "./ChatMessage";
import styles from "./ChatMessages.module.css";

const ChatMessages = () => {
  const messages = [
    {
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/99e83d4598caa3a185d7bf710f0b3f95a91295b2",
      username: "MsGreedy",
      timestamp: "10:13",
      content: "its been an hour window since it sarted they just always",
    },
    {
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/347349836114b18c748bb9caea0b28d4a596d9ea",
      username: "coolmate",
      timestamp: "10:13",
      content: "Hello all friends",
    },
    {
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/ff255cec25a026a193307f05c144f52e2e827632",
      username: "coolmate",
      timestamp: "10:13",
      content: "its all time waiting and show now low 😒",
    },
    {
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/d077b4843a6c6778c0bdf73b23bd9ed9642524b6",
      username: "coolmate",
      timestamp: "10:13",
      content:
        'Please provide camera access through your browser or device settings. Click "Allow" when prompted, or adjust settings accordingly.',
    },
    {
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/501107089a68f7d8fd5350ca5df1a17f98a2c3c2",
      username: "HATEfriends",
      timestamp: "10:13",
      content: "Good luck everybody 🍀",
    },
    {
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/6950594982f1c5df3b2df296a9a36881335f0cb3",
      username: "coolmate",
      timestamp: "10:13",
      content: "Hello all friends",
    },
    {
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/183ceeb3eacac164c7a99ea10751e39080f7c929",
      username: "coolmate",
      timestamp: "10:13",
      content: "how you been mate? It's been a while",
    },
    {
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/e7263e54854a5785d58d9699bfb10e3e27c81311",
      username: "coolmate",
      timestamp: "10:13",
      content: "Ooooooffff",
    },
    {
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/a4842beb47d4119e2f8fc87345eca90179b779ad",
      username: "coolmate",
      timestamp: "10:13",
      content: "errr how did i move to sports",
    },
    {
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/219c2cc0d37702364d09ccd90c5e8358c80861ab",
      username: "coolmate",
      timestamp: "10:13",
      content: "Hello all friends",
    },
    {
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/05598e8bf3af5a585754420cf48924ce98ae1656",
      username: "coolmate",
      timestamp: "10:13",
      content: "they moved the start times for fd back 30 min",
    },
    {
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/c967b8eaeaf57edada0f8ffd734be3df091a4e57",
      username: "coolmate",
      timestamp: "10:13",
      content:
        "thought the mod had gone mad asking not to share casino bets lol",
    },
    {
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/ed9f30af4708b88a5dfae434d8f450a77a8b951d",
      username: "coolmate",
      timestamp: "10:13",
      content:
        "thought the mod had gone mad asking not to share casino bets lol",
    },
    {
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/3db48ef4ce38b577e3bbf3a0db70961ebf899cec",
      username: "coolmate",
      timestamp: "10:13",
      content: "Hello all friends",
    },
  ];

  return (
    <section className={styles.chatContainer}>
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500&family=Space+Grotesk:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <div className={styles.messageList}>
        {messages.map((message, index) => (
          <ChatMessage
            key={`${message.username}-${index}`}
            avatar={message.avatar}
            username={message.username}
            timestamp={message.timestamp}
            content={message.content}
          />
        ))}
      </div>
    </section>
  );
};

export default ChatMessages;
