"use client";

import { useSearchParams } from "next/navigation";
import { FC } from "react";
import { CharacterCard } from "@/entities/Character";
import { queryParams } from "@/shared/configs/queryParams";
import { Button } from "@/shared/ui/Button/Button";
import { useGetCharactersQuery } from "../../api/useGetCharactersQuery";
import styles from "./characters.list.module.scss";
import { CharactersListSkeleton } from "./CharactersListSkeleton";

interface IProps {
  limit?: number;
}
export const CharactersList: FC<IProps> = ({ limit = 9 }) => {
  const searchParams = useSearchParams();
  const queryCharacterId = searchParams.get(queryParams.characterId);

  const { isLoading, data, fetchNextPage, isFetching, hasNextPage } =
    useGetCharactersQuery(limit);

  return (
    <div className={styles.body}>
      <ul className={styles.list}>
        {isLoading && <CharactersListSkeleton count={limit} />}
        {data &&
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

      {!isLoading && hasNextPage && (
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
