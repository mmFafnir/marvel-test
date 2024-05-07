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
    return data.data;
  }

  async searchByName(name: string): Promise<IFetchContainer<TypeCharacter>> {
    const { data } = await axios.get(
      `${this.URL}?limit=${1}&offset=${0}&name=${name}`
    );
    return data.data;
  }

  async getById(id: number): Promise<IFetchContainer<TypeCharacter>> {
    const { data } = await axios.get(`${this.URL}/${id}`);
    return data.data;
  }
}

export const characterService = new Service();
