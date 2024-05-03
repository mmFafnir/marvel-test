import axios from "../../core/axios";
import { IFetchContainer, TypeComics } from "../../types";

interface IParams {
  offset: number;
  limit: number;
}

export const getComics = async ({
  offset,
  limit,
}: IParams): Promise<IFetchContainer<TypeComics>> => {
  const { data } = await axios.get(`/comics?limit=${limit}&offset=${offset}`);
  return data.data;
};
