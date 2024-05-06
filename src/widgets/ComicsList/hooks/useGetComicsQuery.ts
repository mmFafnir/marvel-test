import { useInfiniteQuery } from "@tanstack/react-query";
import { getComics } from "@/shared/api/comics";
import { checkNextPage } from "@/shared/helpers/checkNextPage";

export const useGetComicsQuery = (limit?: number) => {
  const currentLimit = limit || 8;
  return useInfiniteQuery({
    queryFn: (page) =>
      getComics({ offset: page.pageParam, limit: currentLimit }),
    queryKey: ["comics", currentLimit],
    initialPageParam: 0,
    getNextPageParam: checkNextPage,
  });
};
