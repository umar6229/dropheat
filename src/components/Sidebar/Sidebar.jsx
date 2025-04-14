"use client";
import * as React from "react";
import styles from "./Sidebar.module.css";
import MenuItems from "./MenuItems";
import UserActions from "./UserActions";
import SocialLinks from "./SocialLinks";

function Sidebar() {
  return (
    <aside
      className={styles.sidebar}
      role="complementary"
      aria-label="Main navigation"
    >
      <MenuItems />
      <UserActions />
      <SocialLinks />
    </aside>
  );
}

export default Sidebar;
