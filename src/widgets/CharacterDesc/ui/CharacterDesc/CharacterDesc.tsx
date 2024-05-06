"use client";

import { useSearchParams } from "next/navigation";
import { queryParams } from "@/shared/configs/queryParams";
import { replaceUrl } from "@/shared/helpers/replaceUrl";
import { Button } from "@/shared/ui/Button/Button";
import { ImageUI } from "@/shared/ui/ImageUI/ImageUI";
import { useGetDescCharacterQuery } from "../../api/useGetDescCharacterQuery";
import { CharacterDescList } from "../CharacterDescList/CharacterDescList";
import { CharacterDescStatus } from "../CharacterDescStatus/CharacterDescStatus";
import styles from "./character.desc.module.scss";

export const CharacterDesc = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get(queryParams.characterId);

  const { data, isLoading, isLoadingError } = useGetDescCharacterQuery(
    Number(id)
  );
  const wikiUrl = data?.urls.find((url) => url.type === "wiki");

  return (
    <div className={styles.body}>
      {!data && (
        <CharacterDescStatus
          id={id}
          isLoading={isLoading}
          isLoadingError={isLoadingError}
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
              <Button href={{ to: replaceUrl(data.resourceURI) }}>
                HOMEPAGE
              </Button>
              {wikiUrl && (
                <Button
                  href={{ to: wikiUrl.url, target: "_blank" }}
                  typeColor="grey"
                >
                  WIKI
                </Button>
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
    </div>
  );
};
