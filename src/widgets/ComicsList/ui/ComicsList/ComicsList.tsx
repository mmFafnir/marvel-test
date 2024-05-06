"use client";
import { ComicsCard, ComicsCardSkeleton } from "@/entities/ComicsCard";
import { mapInfinityQueryData } from "@/shared/helpers";
import { Button } from "@/shared/ui";
import { useGetComicsQuery } from "../../hooks/useGetComicsQuery";
import styles from "./comics.list.module.scss";

const COMICS_LIMIT = 8;

export const ComicsList = () => {
  const { isLoading, data, fetchNextPage, isFetching, hasNextPage } =
    useGetComicsQuery(COMICS_LIMIT);

  const renderLoadingSkeleton = () => {
    return Array(COMICS_LIMIT)
      .fill(0)
      .map((_, index) => (
        <ComicsCardSkeleton key={index} className={styles.card} />
      ));
  };

  const renderListComics = () => {
    if (!data) return <></>;
    return mapInfinityQueryData(data.pages).map((comics) => (
      <ComicsCard key={comics.id} comics={comics} />
    ));
  };

  return (
    <div className={styles.body}>
      <div className={styles.list}>
        {isLoading && renderLoadingSkeleton()}
        {renderListComics()}
      </div>
      {!isLoading && hasNextPage && (
        <Button
          onClick={fetchNextPage}
          size="long"
          className={styles.btn}
          loading={isFetching}
        >
          LOAD MORE
        </Button>
      )}
    </div>
  );
};
