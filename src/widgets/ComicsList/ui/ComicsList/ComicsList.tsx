"use client";
import { ComicsCard, ComicsCardSkeleton } from "@/entities/ComicsCard";
import { Button } from "@/shared/ui";
import { useGetComicsQuery } from "../../hooks/useGetComicsQuery";
import styles from "./comics.list.module.scss";

const COMICS_LIMIT = 8;

export const ComicsList = () => {
  const { isLoading, data, fetchNextPage, isFetching } =
    useGetComicsQuery(COMICS_LIMIT);

  // TODO: Переделать в функцию mapper
  // Данный кусок кода будер рефакториться
  const content = data?.pages.map((item) =>
    item.results.map((comics) => <ComicsCard key={comics.id} comics={comics} />)
  );

  console.log(data);

  return (
    <div className={styles.body}>
      <div className={styles.list}>
        {isLoading &&
          Array(COMICS_LIMIT)
            .fill(0)
            .map((_, index) => (
              <ComicsCardSkeleton key={index} className={styles.card} />
            ))}
        {content}
      </div>
      <Button
        onClick={fetchNextPage}
        size="long"
        className={styles.btn}
        loading={isFetching}
      >
        LOAD MORE
      </Button>
    </div>
  );
};
