import { FC } from "react";
import { TypeCharacter } from "@/entities/Character";
import { LinkButton } from "@/shared/ui/Button/LinkButton";
import { ImageUI } from "@/shared/ui/ImageUI/ImageUI";
import styles from "./character.random.hero.module.scss";

interface IProps {
  character: TypeCharacter;
}
export const CharacterRandomHero: FC<IProps> = ({ character }) => {
  const wikiUrl = character.urls.find((url) => url.type === "wiki");

  return (
    <>
      <div className={styles.image}>
        <ImageUI
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
          width={180}
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{character.name}</h2>
        <p className={styles.desc}>{character.description}</p>
        <div className={styles.footer}>
          <LinkButton
            href={`/characters/${character.id}`}
            className={styles.btn}
          >
            HOMEPAGE
          </LinkButton>
          {wikiUrl && (
            <LinkButton
              target="_blank"
              href={wikiUrl.url}
              className={styles.btn}
              typeColor="grey"
            >
              WIKI
            </LinkButton>
          )}
        </div>
      </div>
    </>
  );
};
