import { useInfiniteQuery } from "@tanstack/react-query";
import { comicsService } from "@/entities/Comics";
import { checkNextPage } from "@/shared/helpers/checkNextPage";
import { extractInfinityQueryData } from "@/shared/helpers/extractInfinityQueryData";
import { useSaveFetchAndScroll } from "@/shared/hooks/useSaveFetchAndScroll";

export const useGetComicsQuery = (limit?: number) => {
  const { setCountFetch, getCountFetch, setScrollTo } =
    useSaveFetchAndScroll("comics");

  const currentLimit = limit || 8;
  return useInfiniteQuery({
    queryFn: (page) => {
      const initialLimit = getCountFetch();
      const limit =
        initialLimit && page.pageParam === 0 ? initialLimit : currentLimit;
      return comicsService.getAll(page.pageParam, limit);
    },
    queryKey: ["comics", currentLimit],
    select: (data) => {
      const results = extractInfinityQueryData(data.pages);
      // Сохраняю общее количество полученных комиксов
      setCountFetch(results.length, 90);
      setTimeout(setScrollTo, 100);
      return results;
    },
    initialPageParam: 0,
    getNextPageParam: checkNextPage,
  });
};
