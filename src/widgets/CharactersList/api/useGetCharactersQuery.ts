import { useInfiniteQuery } from "@tanstack/react-query";
import { characterService } from "@/entities/Character";
import { checkNextPage } from "@/shared/helpers/checkNextPage";
import { mapInfinityQueryData } from "@/shared/helpers/mapInfinityQueryData";

export const useGetCharactersQuery = (limit?: number) => {
  const currentLimit = limit || 9;
  return useInfiniteQuery({
    queryFn: (page) => characterService.getAll(page.pageParam, currentLimit),
    select: (data) => mapInfinityQueryData(data.pages),
    queryKey: ["characters", currentLimit],
    initialPageParam: 0,
    getNextPageParam: checkNextPage,
  });
};
