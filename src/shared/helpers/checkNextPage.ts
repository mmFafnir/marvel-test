import { IFetchContainer } from "../types";

export const checkNextPage = (lastPage: IFetchContainer<unknown>) => {
  const isHaveNext = lastPage.offset + lastPage.count >= lastPage.total;
  if (isHaveNext) return undefined;
  return lastPage.offset + lastPage.limit;
};
