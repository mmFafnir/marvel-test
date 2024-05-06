import { useInfiniteQuery } from "@tanstack/react-query";
import { comicsService } from "@/entities/Comics";
import { checkNextPage } from "@/shared/helpers/checkNextPage";
import { mapInfinityQueryData } from "@/shared/helpers/mapInfinityQueryData";

export const useGetComicsQuery = (limit?: number) => {
  const currentLimit = limit || 8;
  return useInfiniteQuery({
    queryFn: (page) => comicsService.getAll(page.pageParam, currentLimit),
    queryKey: ["comics", currentLimit],
    select: (data) => mapInfinityQueryData(data.pages),
    initialPageParam: 0,
    getNextPageParam: checkNextPage,
  });
};
