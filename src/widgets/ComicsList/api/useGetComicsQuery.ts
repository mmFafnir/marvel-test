import { useInfiniteQuery } from "@tanstack/react-query";
import { comicsService } from "@/entities/Comics";
import { checkNextPage } from "@/shared/helpers/checkNextPage";
import { extractInfinityQueryData } from "@/shared/helpers/extractInfinityQueryData";

export const useGetComicsQuery = (limit?: number) => {
  const currentLimit = limit || 8;
  return useInfiniteQuery({
    queryFn: (page) => comicsService.getAll(page.pageParam, currentLimit),
    queryKey: ["comics", currentLimit],
    select: (data) => extractInfinityQueryData(data.pages),
    initialPageParam: 0,
    getNextPageParam: checkNextPage,
  });
};
