import Link from "next/link";
import { FC } from "react";
import { ImageUI } from "@/shared/ui/ImageUI/ImageUI";
import { TypeComics } from "../../types/comicsTypes";
import styles from "./comics.card.module.scss";

interface IProps {
  className?: string;
  comics: TypeComics;
}

export const ComicsCard: FC<IProps> = ({ className = "", comics }) => {
  const isHavePrice = comics.prices.length > 0 && comics.prices[0].price > 0;

  return (
    <Link
      href={`/comics/${comics.id}`}
      className={`${styles.body} ${className}`}
    >
      <div className={styles.img}>
        <ImageUI
          src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
          alt={comics.title}
          width={200}
          height={318}
        />
      </div>
      <div className={styles.footer}>
        <h3 className={styles.title}>{comics.title}</h3>
        {isHavePrice && (
          <p className={styles.price}>{comics.prices[0].price}$</p>
        )}
      </div>
    </Link>
  );
};
