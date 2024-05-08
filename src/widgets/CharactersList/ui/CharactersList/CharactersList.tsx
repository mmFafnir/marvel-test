"use client";

import { FC } from "react";
import { CharacterCard } from "@/entities/Character";
import { useQueryParamsHook } from "@/shared/hooks/useQueryParamsHook";
import { Button } from "@/shared/ui/Button/Button";
import { ErrorUI } from "@/shared/ui/ErrorUI/ErrorUI";
import { useGetCharactersQuery } from "../../api/useGetCharactersQuery";
import styles from "./characters.list.module.scss";
import { CharactersListSkeleton } from "./CharactersListSkeleton";

interface IProps {
  limit?: number;
}
export const CharactersList: FC<IProps> = ({ limit = 9 }) => {
  const { getQueryParam } = useQueryParamsHook<"character_id">();
  const queryCharacterId = getQueryParam("character_id");

  const {
    isLoading,
    data,
    fetchNextPage,
    isFetching,
    hasNextPage,
    isError,
    refetch,
  } = useGetCharactersQuery(limit);

  return (
    <div className={styles.body}>
      {isError && <ErrorUI onClick={refetch} />}
      <ul className={styles.list}>
        {isLoading && <CharactersListSkeleton count={limit} />}
        {!isError &&
          data &&
          data.map((character) => (
            <li key={character.id}>
              <CharacterCard
                isActive={Number(queryCharacterId) === character.id}
                className={styles.card}
                character={character}
              />
            </li>
          ))}
      </ul>

      {!isLoading && !isError && hasNextPage && (
        <Button
          isLoading={isFetching}
          className={styles.btn}
          size="long"
          onClick={() => fetchNextPage()}
        >
          LOAD MORE
        </Button>
      )}
    </div>
  );
};
