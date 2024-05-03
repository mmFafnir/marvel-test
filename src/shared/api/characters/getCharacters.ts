import axios from "../../core/axios";
import { IFetchContainer, TypeCharacter } from "../../types";

interface IParams {
  offset: number;
  limit: number;
}

export const getCharacters = async ({
  offset,
  limit,
}: IParams): Promise<IFetchContainer<TypeCharacter>> => {
  const { data } = await axios.get(
    `/characters?limit=${limit}&offset=${offset}`
  );

  return data.data;
};
