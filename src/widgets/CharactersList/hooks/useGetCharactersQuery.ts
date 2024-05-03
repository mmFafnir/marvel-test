import { useInfiniteQuery } from "@tanstack/react-query";
import { getCharacters } from "@/shared/api/characters/getCharacters";

export const useGetCharactersQuery = (limit?: number) => {
  const currentLimit = limit || 9;
  return useInfiniteQuery({
    queryFn: (page) =>
      getCharacters({ offset: page.pageParam, limit: currentLimit }),
    queryKey: ["characters", currentLimit],
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.offset + lastPage.limit,
  });
};
