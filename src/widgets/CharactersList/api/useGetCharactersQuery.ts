import { useInfiniteQuery } from "@tanstack/react-query";
import { characterService } from "@/entities/Character";
import { checkNextPage } from "@/shared/helpers/checkNextPage";
import { extractInfinityQueryData } from "@/shared/helpers/extractInfinityQueryData";
import { setLocalStorage } from "@/shared/helpers/localStorage";
import { EnumStorage } from "@/shared/types/enumStorage";

export const useGetCharactersQuery = (limit?: number) => {
  const currentLimit = limit || 9;
  return useInfiniteQuery({
    queryFn: (page) => characterService.getAll(page.pageParam, currentLimit),
    select: (data) => {
      // Обновляю значения общего количества персонажей
      setLocalStorage(
        EnumStorage.TOTAL_COUNT_CHARACTERS,
        data.pages[data.pages.length - 1].total
      );
      return extractInfinityQueryData(data.pages);
    },
    queryKey: ["characters", currentLimit],
    initialPageParam: 0,
    getNextPageParam: checkNextPage,
  });
};
