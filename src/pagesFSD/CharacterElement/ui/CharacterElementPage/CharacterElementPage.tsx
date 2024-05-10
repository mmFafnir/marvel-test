import { FC } from "react";
import { NewComicsBanner } from "@/entities/Banners";
import { TypeCharacter } from "@/entities/Character";
import { ImageUI } from "@/shared/ui/ImageUI/ImageUI";
import styles from "./character.element.page.module.scss";

interface IProps {
  character: TypeCharacter;
}
export const CharacterElementPage: FC<IProps> = ({ character }) => {
  return (
    <div>
      <NewComicsBanner />
      <div className={styles.content}>
        <div className={styles.image}>
          <ImageUI
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            height={200}
            alt={character.name}
          />
        </div>
        <div className={styles.desc}>
          <h1>{character.name}</h1>
          <p>{character.description}</p>
        </div>
      </div>
    </div>
  );
};
