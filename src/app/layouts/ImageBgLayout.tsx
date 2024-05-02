import Image from "next/image";
import React, { FC, ReactNode } from "react";
import styles from "../styles/image.bg.module.scss";

interface IProps {
  children: ReactNode;
  src: string;
}

export const ImageBgLayout: FC<IProps> = ({ children, src }) => {
  return (
    <>
      {children}
      <div className={styles.body}>
        <Image
          className={styles.img}
          src={src}
          alt="background image"
          width={467}
          height={372}
        />
      </div>
    </>
  );
};
