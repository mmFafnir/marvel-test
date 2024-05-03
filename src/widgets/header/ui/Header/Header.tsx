import React from "react";
import { Links } from "../Links/Links";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <header className={styles.body}>
      <h1>
        <span>Marvel</span> information portal
      </h1>
      <Links />
    </header>
  );
};
