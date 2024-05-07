"use client";

import { useEffect, useState } from "react";
import { getRandomInt } from "@/shared/helpers/getRandomInt";
import { Button } from "@/shared/ui/Button/Button";
import { useGetRandomCharacterQuery } from "../../api/useGetRandomCharacterQuery";
import { getTotalCharacters } from "../../helpers/getTotalCharacters";
import imgBg from "../../images/decoration.png";
import { CharacterRandomHero } from "../CharacterRandomHero/CharacterRandomHero";
import { CharacterRandomStatus } from "../CharacterRandomStatus/CharacterRandomStatus";
import styles from "./character.random.module.scss";

export const CharacterRandom = () => {
  const [randomCount, setRandomCount] = useState<number>(0);
  const { data, isError, isLoading } = useGetRandomCharacterQuery(randomCount);

  const updateRandomCount = () => {
    setRandomCount(getRandomInt(1, getTotalCharacters()));
  };

  useEffect(() => {
    updateRandomCount();
  }, []);

  return (
    <div className={styles.body}>
      <div className={styles.hero}>
        <CharacterRandomStatus
          isLoading={isLoading || !randomCount}
          isError={isError}
        />

        {data && <CharacterRandomHero character={data} />}
      </div>
      <div
        className={styles.content}
        style={{ backgroundImage: `url(${imgBg.src})` }}
      >
        <p className={styles.text}>
          Random character for today! <br />
          Do you want to get to know him better?
        </p>
        <p className={styles.btnText}>Or choose another one</p>
        <Button
          onClick={updateRandomCount}
          isLoading={isLoading}
          className={styles.btn}
        >
          TRY IT
        </Button>
      </div>
    </div>
  );
};
