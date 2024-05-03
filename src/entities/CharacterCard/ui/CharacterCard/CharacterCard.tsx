import Image from "next/image";
import { FC } from "react";
import { TypeCharacter } from "@/shared/types";
import styles from "./character.card.module.scss";

interface IProps {
  className?: string;
  character: TypeCharacter;
}
export const CharacterCard: FC<IProps> = ({ character, className }) => {
  return (
    <div className={`${className} ${styles.body}`}>
      <div className={styles.img}>
        <Image
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
          width={200}
          height={200}
        />
      </div>
      <div className={styles.footer}>
        <h3 className={styles.title}>{character.name}</h3>
      </div>
    </div>
  );
};
