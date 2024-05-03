"use client";

import { CharacterCard, CharacterCardSkeleton } from "@/entities/CharacterCard";
import { Button } from "@/shared/ui";
import { useGetCharactersQuery } from "../../hooks/useGetCharactersQuery";
import styles from "./characters.list.module.scss";

const CHARACTERS_LIMIT = 9;

export const CharactersList = () => {
  const { isLoading, data, fetchNextPage, isFetching, hasNextPage } =
    useGetCharactersQuery(CHARACTERS_LIMIT);

  console.log(hasNextPage);
  const content = data?.pages.map((item) =>
    item.results.map((character) => (
      <CharacterCard
        key={character.id}
        className={styles.card}
        character={character}
      />
    ))
  );

  return (
    <div className={styles.body}>
      <div className={styles.list}>
        {isLoading &&
          Array(CHARACTERS_LIMIT)
            .fill(0)
            .map((_, index) => <CharacterCardSkeleton key={index} />)}
        {content}
      </div>

      {!isLoading && hasNextPage && (
        <Button
          loading={isFetching}
          className={styles.btn}
          size="long"
          onClick={fetchNextPage}
        >
          LOAD MORE
        </Button>
      )}
    </div>
  );
};
