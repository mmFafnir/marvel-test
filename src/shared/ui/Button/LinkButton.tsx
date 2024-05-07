import Link from "next/link";
import { AnchorHTMLAttributes, FC } from "react";
import styles from "./button.module.scss";
import { IButtonProps } from "./buttonProps";

interface IProps extends IButtonProps, AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export const LinkButton: FC<IProps> = ({
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
    <Link {...props} className={classNames}>
      <span></span>
      {isLoading ? "LOADING..." : children}
    </Link>
  );
};
