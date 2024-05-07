import Image from "next/image";
import React, { FC } from "react";
import { Button } from "../Button/Button";
import errorImg from "./error-img.png";
import styles from "./error.module.scss";

interface IProps {
  text?: string;
  onClick?: () => void;
}
export const ErrorUI: FC<IProps> = ({
  text = "Something wrong :(",
  onClick,
}) => {
  return (
    <div className={styles.body}>
      <div className={styles.content}>
        <p>{text}</p>
        {onClick && (
          <Button className={styles.btn} onClick={onClick}>
            REPEAT
          </Button>
        )}
      </div>
      <div className={styles.image}>
        <Image src={errorImg} width={400} alt="error" className={styles.img} />
      </div>
    </div>
  );
};
