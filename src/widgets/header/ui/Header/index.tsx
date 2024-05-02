import React from "react";
import { Links } from "../Links";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <div className={styles.body}>
      <h1>
        <span>Marvel</span> information portal
      </h1>
      <Links />
    </div>
  );
};
