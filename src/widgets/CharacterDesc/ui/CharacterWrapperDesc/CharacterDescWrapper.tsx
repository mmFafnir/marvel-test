import { FC, ReactNode, useEffect } from "react";
import styles from "./character.desc.wrapper.module.scss";
interface IProps {
  isOpen: boolean;
  onClickClose: () => void;
  children: ReactNode;
}
export const CharacterDescWrapper: FC<IProps> = ({
  isOpen,
  onClickClose,
  children,
}) => {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.code !== "Escape") return;
      onClickClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClickClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll-mob");
    } else {
      document.body.classList.remove("no-scroll-mob");
    }

    return () => {
      document.body.classList.remove("no-scroll-mob");
    };
  }, [isOpen]);

  return (
    <div className={`${styles.body} ${isOpen ? styles.show : ""}`}>
      <button onClick={onClickClose} className={styles.mobClose}>
        X
      </button>
      {children}
    </div>
  );
};
