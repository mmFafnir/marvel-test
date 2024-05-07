import { useQuery } from "@tanstack/react-query";
import { characterService } from "@/entities/Character";
// import { getTotalCharacters } from "../helpers/getTotalCharacters";

export const useGetRandomCharacterQuery = (count: number) => {
  return useQuery({
    queryKey: ["get-random", count],
    queryFn: () => {
      return characterService.getAll(count, 1);
    },
    select: (data) => data.results[0],
    enabled: !!count,
  });
};
