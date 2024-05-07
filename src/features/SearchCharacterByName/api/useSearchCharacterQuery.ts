import { useQuery } from "@tanstack/react-query";
import { characterService } from "@/entities/Character";

export const useSearchCharacterQuery = (name: string) => {
  return useQuery({
    queryKey: ["search", name],
    queryFn: () => {
      return characterService.searchByName(name);
    },
    select: (data) => data.results,
    enabled: !!name,
  });
};
