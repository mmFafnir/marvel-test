import Link from "next/link";
import { FC } from "react";
import SimpleBar from "simplebar-react";
import { TypeCharacterComicsItem } from "@/entities/Character";
import { replaceUrl } from "@/shared/helpers/replaceUrl";
import styles from "./character.desc.list.module.scss";

interface IProps {
  comics: TypeCharacterComicsItem[];
}

export const CharacterDescList: FC<IProps> = ({ comics }) => {
  return (
    <div className={styles.list}>
      <p className={styles.title}>Comics:</p>
      <SimpleBar className={styles.scroll}>
        <ul>
          {comics.map((item) => {
            const href = replaceUrl(item.resourceURI);
            return (
              <li key={href} className={styles.link}>
                <Link href={href}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </SimpleBar>
    </div>
  );
};
