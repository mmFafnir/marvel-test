import { ButtonHTMLAttributes, FC } from "react";
import styles from "./button.module.scss";
import { IButtonProps } from "./buttonProps";

interface IProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    IButtonProps {}
export const Button: FC<IProps> = ({
  children,
  typeColor = "default",
  size = "",
  isLoading,
  className,
  ...props
}) => {
  const classNames = [
    styles.body,
    styles[typeColor],
    styles[size],
    className,
    isLoading ? styles.loading : "",
  ].join(" ");

  return (
    <button className={classNames} {...props}>
      <span></span>
      {isLoading ? "LOADING..." : children}
    </button>
  );
};
