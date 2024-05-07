import React, { FC } from "react";
import ContentLoader from "react-content-loader";
import styles from "./comics.card.module.scss";

interface IProps {
  className?: string;
}
export const ComicsCardSkeleton: FC<IProps> = ({ className = "" }) => {
  return (
    <div className={`${className} ${styles.body} ${styles.skeleton}`}>
      <ContentLoader
        speed={2}
        width={225}
        height={441}
        viewBox="0 0 225 441"
        backgroundColor="#cac9c9"
        foregroundColor="#ecebeb"
      >
        <rect x="-1" y="-69" rx="0" ry="0" width="226" height="450" />
        <rect x="2" y="388" rx="0" ry="0" width="185" height="11" />
        <rect x="2" y="405" rx="0" ry="0" width="70" height="8" />
      </ContentLoader>
    </div>
  );
};
