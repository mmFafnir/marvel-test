import { getLocalStorage } from "@/shared/helpers/localStorage";
import { EnumStorage } from "@/shared/types/enumStorage";

export const getTotalCharacters = () => {
  const totalCount =
    getLocalStorage<string | null>(EnumStorage.TOTAL_COUNT_CHARACTERS) ||
    "1564";

  return Number(totalCount);
};
