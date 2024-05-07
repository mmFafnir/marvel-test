import { useQuery } from "@tanstack/react-query";
import { characterService } from "@/entities/Character";

export const useGetDescCharacterQuery = (id: number) => {
  return useQuery({
    queryFn: () => characterService.getById(id),
    select: (data) => data.results[0],
    queryKey: ["characterId", id],
    enabled: !!id,
  });
};
