import { FC, ReactNode } from "react";
import styles from "./button.module.scss";

interface IProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "grey" | "default" | "long";
  size?: "long";
  loading?: boolean;
}
export const Button: FC<IProps> = ({
  children,
  type = "default",
  size = "",
  onClick,
  className,
  loading,
}) => {
  const classNames = [
    styles.body,
    styles[type],
    styles[size],
    className,
    loading ? styles.loading : "",
  ].join(" ");

  return (
    <button className={classNames} onClick={onClick}>
      <span>{loading ? "loading..." : children} </span>
    </button>
  );
};
