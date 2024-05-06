import { FC } from "react";
import { ComicsCardSkeleton } from "@/entities/Comics";

interface IProps {
  count: number;
}
export const ComicsListSkeleton: FC<IProps> = ({ count }) => {
  return Array(count)
    .fill(0)
    .map((_, index) => (
      <li key={index}>
        <ComicsCardSkeleton />
      </li>
    ));
};
