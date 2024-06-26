"use client";
import { FC } from "react";
import { ComicsCard } from "@/entities/Comics";
import { Button } from "@/shared/ui/Button/Button";
import { useGetComicsQuery } from "../../api/useGetComicsQuery";
import styles from "./comics.list.module.scss";
import { ComicsListSkeleton } from "./ComicsListSkeleton";

interface IProps {
  limit?: number;
}
export const ComicsList: FC<IProps> = ({ limit = 8 }) => {
  const { isLoading, data, fetchNextPage, isFetching, hasNextPage } =
    useGetComicsQuery(limit);

  return (
    <div className={styles.body}>
      <ul className={styles.list}>
        {isLoading && <ComicsListSkeleton count={limit} />}
        {data &&
          data.map((comics) => (
            <li key={comics.id}>
              <ComicsCard comics={comics} />
            </li>
          ))}
      </ul>
      {!isLoading && hasNextPage && (
        <Button
          onClick={() => fetchNextPage()}
          size="long"
          className={styles.btn}
          isLoading={isFetching}
        >
          LOAD MORE
        </Button>
      )}
    </div>
  );
};
