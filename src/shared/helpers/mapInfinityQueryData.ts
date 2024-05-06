import { IFetchContainer } from "../types";

export const mapInfinityQueryData = <T>(pages: IFetchContainer<T>[]) => {
  return pages
    .map((item) => item.results)
    .flat()
    .map((item) => ({
      ...item,
    }));
};
