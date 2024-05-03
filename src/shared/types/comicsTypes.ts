import { TypeImage } from "./typeImage";

export type TypeComics = {
  id: number;
  description: string;
  title: string;
  prices: {
    price: number;
    type: string;
  }[];

  thumbnail: TypeImage;
};
