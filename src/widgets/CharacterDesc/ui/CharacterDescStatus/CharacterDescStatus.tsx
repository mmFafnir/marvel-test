import { FC } from "react";
import styles from "./character.desc.status.module.scss";
import { Skeleton } from "./Skeleton";

const placeholderTexts = {
  notId: "Please select a character to see information",
  isLoading: "Loading...",
  isLoadingError: "Character not found",
};

interface IProps {
  id: string | null;
  isLoading: boolean;
  isLoadingError: boolean;
}

export const CharacterDescStatus: FC<IProps> = ({
  id,
  isLoading,
  isLoadingError,
}) => {
  const renderText = () => {
    if (!id) return placeholderTexts.notId;
    if (isLoading) return placeholderTexts.isLoading;
    if (isLoadingError) return placeholderTexts.isLoadingError;
  };
  return (
    <>
      <p className={styles.text}>{renderText()}</p>
      <Skeleton />
    </>
  );
};
