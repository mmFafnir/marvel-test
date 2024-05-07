import Link from "next/link";
import { FC } from "react";
import { NewComicsBanner } from "@/entities/Banners";
import { TypeComics } from "@/entities/Comics";
import { ImageUI } from "@/shared/ui/ImageUI/ImageUI";
import styles from "./comics.element.page.module.scss";

interface IProps {
  comics: TypeComics;
}
export const ComicsElementPage: FC<IProps> = ({ comics }) => {
  const isHavePrice = comics.prices.length > 0 && comics.prices[0].price > 0;
  return (
    <div>
      <NewComicsBanner />
      <div className={styles.content}>
        <div className={styles.image}>
          <ImageUI
            src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
            alt={comics.title}
            width={293}
          />
        </div>
        <div className={styles.desc}>
          <div className={styles.header}>
            <h1>{comics.title}</h1>
            <Link href={"/comics"} className={styles.backBtn}>
              Back to all
            </Link>
          </div>
          <p className={styles.text}>{comics.description}</p>
          {comics.pageCount > 0 && (
            <p className={styles.pages}> {comics.pageCount} pages</p>
          )}
          <p className={styles.lang}>Language: en-us</p>

          {isHavePrice && (
            <p className={styles.price}>{comics.prices[0].price}$</p>
          )}
        </div>
      </div>
    </div>
  );
};
