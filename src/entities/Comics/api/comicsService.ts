import { axios } from "@/shared/core/axios";
import { IFetchContainer } from "@/shared/types/containerTypes";
import { TypeComics } from "../types/comicsTypes";

class Service {
  private URL = "/comics";

  async getAll(
    offset: number,
    limit: number
  ): Promise<IFetchContainer<TypeComics>> {
    const { data } = await axios.get(
      `${this.URL}?limit=${limit}&offset=${offset}`
    );
    return data.data;
  }
}

export const comicsService = new Service();
