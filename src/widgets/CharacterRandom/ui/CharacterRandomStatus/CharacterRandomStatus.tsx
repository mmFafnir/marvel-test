import { FC } from "react";
import styles from "./character.random.status.module.scss";
import { Skeleton } from "./Skeleton";

interface IProps {
  isLoading: boolean;
  isError: boolean;
}
export const CharacterRandomStatus: FC<IProps> = ({ isLoading, isError }) => {
  return (
    <>
      {isLoading && <Skeleton />}
      {isError && (
        <p className={styles.errorText}>
          Something went wrong( <br /> Try again!
        </p>
      )}
    </>
  );
};
