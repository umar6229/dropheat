"use client";
import React, { useState } from "react";
import styles from "./MainHeader.module.css";

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      className={styles.languageSelector}
      onClick={() => setIsOpen(!isOpen)}
      aria-expanded={isOpen}
      aria-haspopup="listbox"
      aria-label="Select language. Current language: English"
    >
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c64296bb82778e8d98da9cee598c2749fc34147"
        alt=""
        className={styles.flagIcon}
        aria-hidden="true"
      />
      <span className={styles.selectorText}>EN</span>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.chevronIcon}
        aria-hidden="true"
      >
        <path
          d="M4 6L8 10L12 6"
          stroke="#676778"
          strokeWidth="1.77778"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

const CurrencySelector = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      className={styles.currencySelector}
      onClick={() => setIsOpen(!isOpen)}
      aria-expanded={isOpen}
      aria-haspopup="listbox"
      aria-label="Select currency. Current currency: USD"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.currencyIcon}
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.4589 13.4716C2.49399 12.506 2.41216 11.0259 2.82359 9.58583C3.24178 8.12216 4.20222 6.54274 5.58082 5.16414C6.95943 3.78554 8.53885 2.82509 10.0025 2.4069C11.4429 1.99537 12.9234 2.07735 13.889 3.04292L13.9074 3.06155L13.9163 3.07023L16.5405 5.69442C17.506 6.66 17.588 8.1405 17.1765 9.58087C16.7583 11.0445 15.7979 12.624 14.4192 14.0026C13.0406 15.3812 11.4612 16.3416 9.99756 16.7598C8.55719 17.1713 7.07668 17.0894 6.11111 16.1238L3.4589 13.4716ZM6.46471 6.04802C7.72202 4.79071 9.12252 3.95835 10.3459 3.60881C11.5926 3.25261 12.5063 3.42798 13.0051 3.9268C13.5039 4.42562 13.6793 5.33929 13.3231 6.58597C12.9735 7.80936 12.1412 9.20987 10.8839 10.4672C9.62656 11.7245 8.22605 12.5568 7.00266 12.9064C6.77387 12.9718 6.5563 13.0192 6.35045 13.0501C5.43481 13.1872 4.75113 12.9955 4.34391 12.5883L4.33135 12.5761C3.84185 12.0747 3.6722 11.1657 4.02549 9.92923C4.37504 8.70584 5.2074 7.30533 6.46471 6.04802Z"
          fill="#A3A3B7"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.707 6.2247C10.951 6.46877 10.951 6.8645 10.707 7.10858L10.5949 7.22059C10.6007 7.23789 10.6061 7.25555 10.611 7.2736C10.6972 7.5864 10.6348 7.89732 10.4931 8.19211C10.3435 8.50319 9.97003 8.63411 9.65895 8.48453C9.34787 8.33495 9.21694 7.9615 9.36653 7.65042C9.37604 7.63063 9.38294 7.6143 9.38793 7.60119C9.38485 7.59791 9.38155 7.59444 9.378 7.59077C9.37159 7.58487 9.36528 7.57881 9.35906 7.5726C9.35386 7.56739 9.34877 7.56212 9.34378 7.55678C9.32117 7.53573 9.30544 7.52475 9.29619 7.51927C9.26626 7.52911 9.18933 7.56561 9.06196 7.69298C8.96667 7.78827 8.90817 7.88496 8.88138 7.95488C8.82558 8.1005 9.07346 8.50872 9.13061 8.65556C9.25361 8.97366 9.19474 9.29884 9.10262 9.53919C9.00562 9.7923 8.84245 10.0337 8.63878 10.2374C8.29353 10.5826 7.90119 10.7955 7.46939 10.7791C7.33641 10.7741 7.21557 10.7477 7.10696 10.7086L6.99483 10.8207C6.75076 11.0648 6.35503 11.0648 6.11095 10.8207C5.86687 10.5766 5.86687 10.1809 6.11095 9.93683L6.2222 9.82557C6.21626 9.8076 6.21069 9.78923 6.20557 9.77045C6.12022 9.45744 6.18335 9.1466 6.32531 8.85199C6.47515 8.54104 6.84871 8.41043 7.15967 8.56027C7.47062 8.71012 7.60123 9.08367 7.45139 9.39463C7.44157 9.415 7.43449 9.43177 7.4294 9.44518C7.43944 9.45401 7.44926 9.46322 7.45885 9.47281C7.46771 9.48167 7.47624 9.49073 7.48446 9.49997C7.50106 9.51446 7.51305 9.52269 7.52066 9.5272C7.55059 9.51736 7.62752 9.48086 7.75489 9.35349C7.85032 9.25807 7.9087 9.16156 7.9354 9.09186C7.99127 8.94609 7.74392 8.5391 7.68675 8.39221C7.56283 8.07363 7.6222 7.74755 7.71413 7.50763C7.81111 7.25454 7.97428 7.01289 8.17808 6.80909C8.52333 6.46384 8.91567 6.251 9.34747 6.26736C9.48045 6.2724 9.60129 6.29872 9.70989 6.33788L9.82308 6.2247C10.0672 5.98062 10.4629 5.98062 10.707 6.2247Z"
          fill="#A3A3B7"
        />
      </svg>
      <span className={styles.selectorText}>USD</span>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.chevronIcon}
        aria-hidden="true"
      >
        <path
          d="M4 6L8 10L12 6"
          stroke="#676778"
          strokeWidth="1.77778"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

const ChatButton = () => {

  const handleChatBox = ()=>{
    const box = document.getElementById("chat-container");
    if(box?.style?.display === "none"){
      box.style.display= "block"
    }else{
      box.style.display = "none"
    }
  }

  return (
    <button className={styles.chatButton} onClick={handleChatBox} aria-label="Open chat">
      <svg
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.chatIcon}
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.125 6.33333C18.125 4.14721 16.3528 2.375 14.1667 2.375H5.83333C3.64721 2.375 1.875 4.14721 1.875 6.33333V12.1667C1.875 14.3528 3.64721 16.125 5.83333 16.125H7.8125L9.5 18.375C9.61803 18.5324 9.80328 18.625 10 18.625C10.1967 18.625 10.382 18.5324 10.5 18.375L12.1875 16.125H14.1667C16.3528 16.125 18.125 14.3528 18.125 12.1667V6.33333ZM13.3333 10.0833C12.8667 10.0833 12.5 9.70833 12.5 9.25C12.5 8.79167 12.875 8.41667 13.3333 8.41667C13.7917 8.41667 14.1667 8.79167 14.1667 9.25C14.1667 9.70833 13.8 10.0833 13.3333 10.0833ZM10 10.0833C9.53333 10.0833 9.16667 9.70833 9.16667 9.25C9.16667 8.79167 9.54167 8.41667 10 8.41667C10.4583 8.41667 10.8333 8.79167 10.8333 9.25C10.8333 9.70833 10.4667 10.0833 10 10.0833ZM5.83333 9.25C5.83333 9.70833 6.2 10.0833 6.66667 10.0833C7.13333 10.0833 7.5 9.70833 7.5 9.25C7.5 8.79167 7.125 8.41667 6.66667 8.41667C6.20833 8.41667 5.83333 8.79167 5.83333 9.25Z"
          fill="#4B4B58"
        />
      </svg>
    </button>
  );
};

const KebabMenu = () => {

  const handleSidebar = ()=>{
    const sidebar = document.getElementById("sidebar-container");
    if(sidebar?.style?.display === "none"){
      sidebar.style.display= "block"
    }else{
      sidebar.style.display = "none"
    }
  }

  return (
    <button className={styles.chatButton} aria-label="Open chat" onClick={handleSidebar}>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.0625 14.25C11.0625 13.1109 10.1391 12.1875 9 12.1875C7.86091 12.1875 6.9375 13.1109 6.9375 14.25C6.9375 15.3891 7.86091 16.3125 9 16.3125C10.1391 16.3125 11.0625 15.3891 11.0625 14.25Z"
          fill="#4B4B58"
        />
        <path
          d="M11.0625 9C11.0625 7.86091 10.1391 6.9375 9 6.9375C7.86091 6.9375 6.9375 7.86091 6.9375 9C6.9375 10.1391 7.86091 11.0625 9 11.0625C10.1391 11.0625 11.0625 10.1391 11.0625 9Z"
          fill="#4B4B58"
        />
        <path
          d="M11.0625 3.75C11.0625 2.61091 10.1391 1.6875 9 1.6875C7.86091 1.6875 6.9375 2.61091 6.9375 3.75C6.9375 4.88909 7.86091 5.8125 9 5.8125C10.1391 5.8125 11.0625 4.88909 11.0625 3.75Z"
          fill="#4B4B58"
        />
      </svg>
    </button>
  );
};

const UserActions = () => {
  return (
    <div className={styles.userActions} role="group" aria-label="User actions">
      <LanguageSelector />
      <CurrencySelector />
      <a href="/auth" className={styles.authButton}>
        Authorization
      </a>
      <ChatButton />
      <KebabMenu />
    </div>
  );
};

export default UserActions;
