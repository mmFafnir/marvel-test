import { FC, HTMLAttributes, ReactNode } from "react";
import styles from "./button.module.scss";

interface IProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  type?: "grey" | "default" | "long";
  size?: "long";
  isLoading?: boolean;
}
export const Button: FC<IProps> = ({
  children,
  type = "default",
  size = "",
  isLoading,
  className,
  ...props
}) => {
  const classNames = [
    styles.body,
    styles[type],
    styles[size],
    className,
    isLoading ? styles.loading : "",
  ].join(" ");

  return (
    <button className={classNames} {...props}>
      {isLoading ? "LOADING..." : children}
    </button>
  );
};
