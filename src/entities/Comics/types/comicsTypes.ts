import { TypeImage } from "@/shared/types/typeImage";

type textObject = {
  language: string;
  text: string;
};

export type TypeComics = {
  id: number;
  description: string;
  title: string;
  pageCount: number;
  textObjects: textObject;
  prices: {
    price: number;
    type: string;
  }[];

  thumbnail: TypeImage;
};
