import Link from "next/link";
import { FC } from "react";
import { queryParams } from "@/shared/configs/queryParams";
import { ImageUI } from "@/shared/ui/ImageUI/ImageUI";
import { TypeCharacter } from "../../types/charactersTypes";
import styles from "./character.card.module.scss";

interface IProps {
  className?: string;
  isActive?: boolean;
  character: TypeCharacter;
}
export const CharacterCard: FC<IProps> = ({
  character,
  className = "",
  isActive = false,
}) => {
  return (
    <Link
      href={{ query: { [queryParams.characterId]: character.id } }}
      scroll={false}
      className={`${className} ${styles.body} ${isActive ? styles.active : ""}`}
    >
      {/* <div className={styles.img}> */}
      <ImageUI
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
        width={200}
        height={200}
      />
      {/* </div> */}
      <div className={styles.footer}>
        <h3 className={styles.title}>{character.name}</h3>
      </div>
    </Link>
  );
};
