"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { routeLinks } from "@/shared/configs";
import styles from "./links.module.scss";

export const Links = () => {
  const pathname = usePathname();

  const isActivePathname = (path: string) => {
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
            isActivePathname(link.href) ? styles.active : ""
          }`}
        >
          <Link href={link.href}>{link.title}</Link>
        </div>
      ))}
    </div>
  );
};
