import React, { FC } from "react";
import ContentLoader from "react-content-loader";
import styles from "./character.card.module.scss";

interface IProps {
  className?: string;
}
export const CharacterCardSkeleton: FC<IProps> = ({ className = "" }) => {
  return (
    <div className={`${className} ${styles.body} ${styles.skeleton}`}>
      <ContentLoader
        speed={2}
        width={200}
        height={318}
        viewBox="0 0 200 318"
        backgroundColor="#cac9c9"
        foregroundColor="#ecebeb"
      >
        <rect x="-8" y="-102" rx="0" ry="0" width="226" height="450" />
      </ContentLoader>
    </div>
  );
};
