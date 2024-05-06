import Link from "next/link";
import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import styles from "./button.module.scss";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  typeColor?: "grey" | "default";
  size?: "long";
  isLoading?: boolean;
  href?: { to: string; target?: "_self" | "_blank" | "_parent" | "_top" };
}
export const Button: FC<IProps> = ({
  children,
  typeColor = "default",
  size = "",
  isLoading,
  className,
  href,
  ...props
}) => {
  const classNames = [
    styles.body,
    styles[typeColor],
    styles[size],
    className,
    isLoading ? styles.loading : "",
  ].join(" ");

  if (href)
    return (
      <Link href={href.to} target={href.target} className={classNames}>
        <span></span>
        {isLoading ? "LOADING..." : children}
      </Link>
    );

  return (
    <button className={classNames} {...props}>
      <span></span>
      {isLoading ? "LOADING..." : children}
    </button>
  );
};
