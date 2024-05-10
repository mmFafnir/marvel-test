import { useInfiniteQuery } from "@tanstack/react-query";
import { characterService } from "@/entities/Character";
import { checkNextPage } from "@/shared/helpers/checkNextPage";
import { extractInfinityQueryData } from "@/shared/helpers/extractInfinityQueryData";
import { setLocalStorage } from "@/shared/helpers/localStorage";
import { useSafeFetchAndScroll } from "@/shared/hooks/useSafeFetchAndScroll";
import { EnumStorage } from "@/shared/types/enumStorage";

export const useGetCharactersQuery = (limit?: number) => {
  const { setCountFetch, getCountFetch, setScrollTo } =
    useSafeFetchAndScroll("characters");

  const currentLimit = limit || 9;
  return useInfiniteQuery({
    queryFn: (page) => {
      const initialLimit = getCountFetch();
      const limit =
        initialLimit && page.pageParam === 0 ? initialLimit : currentLimit;
      return characterService.getAll(page.pageParam, limit);
    },
    select: (data) => {
      // Обновляю значения общего количества персонажей
      setLocalStorage(
        EnumStorage.TOTAL_COUNT_CHARACTERS,
        data.pages[data.pages.length - 1].total
      );
      const results = extractInfinityQueryData(data.pages);
      // Сохраняю общее количество полученных персонажей
      setCountFetch(results.length, 90);
      setTimeout(setScrollTo, 100);
      return results;
    },
    queryKey: ["characters", currentLimit],
    initialPageParam: 0,
    getNextPageParam: checkNextPage,
  });
};
