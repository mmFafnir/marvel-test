"use client";
import { FC } from "react";
import { ComicsCard } from "@/entities/Comics";
import { Button } from "@/shared/ui/Button/Button";
import { ErrorUI } from "@/shared/ui/ErrorUI/ErrorUI";
import { useGetComicsQuery } from "../../api/useGetComicsQuery";
import styles from "./comics.list.module.scss";
import { ComicsListSkeleton } from "./ComicsListSkeleton";

interface IProps {
  limit?: number;
}
export const ComicsList: FC<IProps> = ({ limit = 8 }) => {
  const {
    isLoading,
    data,
    fetchNextPage,
    isFetching,
    hasNextPage,
    isError,
    refetch,
  } = useGetComicsQuery(limit);

  return (
    <div className={styles.body}>
      {isError && <ErrorUI onClick={refetch} />}
      <ul className={styles.list}>
        {isLoading && <ComicsListSkeleton count={limit} />}
        {!isError &&
          data &&
          data.map((comics) => (
            <li key={comics.id}>
              <ComicsCard comics={comics} />
            </li>
          ))}
      </ul>
      {!isLoading && !isError && hasNextPage && (
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
