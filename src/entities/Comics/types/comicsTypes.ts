import { TypeImage } from "@/shared/types/typeImage";

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
