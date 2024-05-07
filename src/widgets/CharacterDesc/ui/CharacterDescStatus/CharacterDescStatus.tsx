import { FC } from "react";
import styles from "./character.desc.status.module.scss";
import { Skeleton } from "./Skeleton";

const placeholderTexts = {
  notId: "Please select a character to see information",
  loading: "Loading...",
  error: "Character not found",
};

interface IProps {
  id: string | null;
  isLoading: boolean;
  isError: boolean;
}

export const CharacterDescStatus: FC<IProps> = ({ id, isLoading, isError }) => {
  const renderText = () => {
    if (!id) return placeholderTexts.notId;
    if (isLoading) return placeholderTexts.loading;
    if (isError) return placeholderTexts.error;
  };
  return (
    <>
      <p className={styles.text}>{renderText()}</p>
      <div className={styles.skeleton}>
        <Skeleton />
      </div>
    </>
  );
};
