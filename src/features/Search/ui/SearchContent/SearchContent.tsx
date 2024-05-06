import React, { FC } from "react";
import { TypeCharacter } from "@/entities/Character";
import { Button } from "@/shared/ui/Button/Button";
import styles from "./search.content.module.scss";

interface IProps {
  isLoading: boolean;
  isRequired: boolean;
  character?: TypeCharacter[];
}

const errorText = {
  required: "This field is required",
  empty: "The character was not found. Check the name and try again",
};

export const SearchContent: FC<IProps> = ({
  isLoading,
  isRequired,
  character,
}) => {
  const renderTextError = () => {
    if (isRequired) return errorText.required;
    if (character && character.length === 0) return errorText.empty;
    return false;
  };

  return (
    <div className={styles.content}>
      {isLoading && <p>Loading...</p>}
      {!isLoading && renderTextError() && (
        <p className={styles.error}>{renderTextError()}</p>
      )}
      {!isLoading && character && !renderTextError() && (
        <>
          <p className={styles.success}>
            There is! Visit {character[0].name} page?
          </p>
          <Button
            href={{ to: `/characters/${character[0].id}` }}
            typeColor="grey"
          >
            TO PAGE
          </Button>
        </>
      )}
    </div>
  );
};
