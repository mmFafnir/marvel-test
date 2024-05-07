import { axios } from "@/shared/core/axios";
import { IFetchContainer } from "@/shared/types/containerTypes";
import { TypeCharacter } from "../types/charactersTypes";

class Service {
  private URL = "characters";

  async getAll(
    offset: number,
    limit: number
  ): Promise<IFetchContainer<TypeCharacter>> {
    const { data } = await axios.get(
      `${this.URL}?limit=${limit}&offset=${offset}`
    );
    console.log(data);
    return data.data;
  }
}

export const characterService = new Service();
