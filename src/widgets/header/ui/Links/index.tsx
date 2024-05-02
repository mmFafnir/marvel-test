"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { routeLinks } from "../../consts/links";
import styles from "./links.module.scss";

export const Links = () => {
  const pathname = usePathname();

  const onCheckedPathname = (path: string) => {
    if (path === "/") return pathname === "/";
    if (pathname?.includes(path)) return true;
    return false;
  };

  return (
    <div className={styles.links}>
      {routeLinks.map((link) => (
        <div
          key={link.href}
          className={`${styles.link} ${
            onCheckedPathname(link.href) ? styles.active : ""
          }`}
        >
          <Link href={link.href}>{link.title}</Link>
        </div>
      ))}
    </div>
  );
};
