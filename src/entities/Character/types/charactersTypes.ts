import { TypeImage } from "@/shared/types/typeImage";

export type TypeCharacter = {
  id: number;
  description: string;
  modified: string;
  name: string;
  resourceURI: string;
  comics: [];
  thumbnail: TypeImage;
};
