import { useInfiniteQuery } from "@tanstack/react-query";
import { getCharacters } from "@/shared/api/characters/getCharacters";
import { checkNextPage } from "@/shared/helpers/checkNextPage";

export const useGetCharactersQuery = (limit?: number) => {
  const currentLimit = limit || 9;
  return useInfiniteQuery({
    queryFn: (page) =>
      getCharacters({ offset: page.pageParam, limit: currentLimit }),
    queryKey: ["characters", currentLimit],
    initialPageParam: 0,
    getNextPageParam: checkNextPage,
  });
};
