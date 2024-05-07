import { TypeImage } from "@/shared/types/typeImage";
import { urlType } from "@/shared/types/urlType";

export type TypeCharacterComicsItem = {
  name: string;
  resourceURI: string;
};

export type TypeCharacterComicsList = {
  available: number;
  collectionURI: string;
  items: TypeCharacterComicsItem[];
  returned: number;
};

export type TypeCharacter = {
  id: number;
  description: string;
  modified: string;
  name: string;
  resourceURI: string;
  comics: TypeCharacterComicsList;
  thumbnail: TypeImage;
  urls: urlType[];
};
