"use client";

import { CharacterCard, CharacterCardSkeleton } from "@/entities/CharacterCard";
import { mapInfinityQueryData } from "@/shared/helpers";
import { Button } from "@/shared/ui";
import { useGetCharactersQuery } from "../../hooks/useGetCharactersQuery";
import styles from "./characters.list.module.scss";

const CHARACTERS_LIMIT = 9;

export const CharactersList = () => {
  const { isLoading, data, fetchNextPage, isFetching, hasNextPage } =
    useGetCharactersQuery(CHARACTERS_LIMIT);

  const renderLoadingSkeleton = () => {
    return Array(CHARACTERS_LIMIT)
      .fill(0)
      .map((_, index) => <CharacterCardSkeleton key={index} />);
  };

  const renderListCharacters = () => {
    if (!data) return <></>;
    return mapInfinityQueryData(data.pages).map((character) => (
      <CharacterCard
        key={character.id}
        className={styles.card}
        character={character}
      />
    ));
  };

  return (
    <div className={styles.body}>
      <div className={styles.list}>
        {isLoading && renderLoadingSkeleton()}
        {renderListCharacters()}
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
