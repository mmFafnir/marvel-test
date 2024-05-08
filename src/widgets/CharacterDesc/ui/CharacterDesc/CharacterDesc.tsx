"use client";

import { useQueryParamsHook } from "@/shared/hooks/useQueryParamsHook";
import { LinkButton } from "@/shared/ui/Button/LinkButton";
import { ImageUI } from "@/shared/ui/ImageUI/ImageUI";
import { useGetDescCharacterQuery } from "../../api/useGetDescCharacterQuery";
import { CharacterDescList } from "../CharacterDescList/CharacterDescList";
import { CharacterDescStatus } from "../CharacterDescStatus/CharacterDescStatus";
import { CharacterDescWrapper } from "../CharacterWrapperDesc/CharacterDescWrapper";
import styles from "./character.desc.module.scss";

export const CharacterDesc = () => {
  const { getQueryParam, removeQueryParam } =
    useQueryParamsHook<"character_id">();

  const id = getQueryParam("character_id");
  const { data, isLoading, isLoadingError } = useGetDescCharacterQuery(
    Number(id)
  );
  const wikiUrl = data?.urls.find((url) => url.type === "wiki");

  return (
    <CharacterDescWrapper
      isOpen={!!id}
      onClickClose={() => removeQueryParam("character_id")}
    >
      {!data && (
        <CharacterDescStatus
          id={id}
          isLoading={isLoading}
          isError={isLoadingError}
        />
      )}
      {data && (
        <>
          <div className={styles.info}>
            <div className={styles.image}>
              <ImageUI
                src={`${data?.thumbnail.path}.${data?.thumbnail.extension}`}
                width={150}
                height={150}
                alt={data?.name}
              />
            </div>
            <div className={styles.actions}>
              <h2 className={styles.name}>{data.name}</h2>
              <LinkButton href={`/characters/${data.id}`}>HOMEPAGE</LinkButton>
              {wikiUrl && (
                <LinkButton href={wikiUrl.url} target="_blank" typeColor="grey">
                  WIKI
                </LinkButton>
              )}
            </div>
          </div>
          <div className={styles.desc}>
            <p>{data.description}</p>
          </div>
          {data.comics.items.length > 0 && (
            <CharacterDescList comics={data.comics.items} />
          )}
        </>
      )}
    </CharacterDescWrapper>
  );
};
