import React from "react";
import { Links } from "../Links/Links";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <header className={styles.body}>
      <h1>
        <span className={styles.title}>Marvel</span>{" "}
        <span>information portal</span>
      </h1>
      <Links />
    </header>
  );
};
