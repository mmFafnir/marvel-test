import { FC } from "react";
import { CharacterCardSkeleton } from "@/entities/Character";

interface IProps {
  count: number;
}
export const CharactersListSkeleton: FC<IProps> = ({ count }) => {
  return Array(count)
    .fill(0)
    .map((_, index) => (
      <li key={index}>
        <CharacterCardSkeleton />
      </li>
    ));
};
