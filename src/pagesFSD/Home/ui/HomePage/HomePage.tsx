import Image from "next/image";
import { Suspense } from "react";
import { CharacterDesc } from "@/widgets/CharacterDesc";
import { CharacterRandom } from "@/widgets/CharacterRandom";
import { CharactersList } from "@/widgets/CharactersList";
import { SearchCharacterByName } from "@/features/SearchCharacterByName";
import styles from "./home.page.module.scss";

export const HomePage = () => {
  return (
    <>
      <CharacterRandom />
      <main className={styles.body}>
        <div className={styles.content}>
          <Suspense>
            <CharactersList />
          </Suspense>
        </div>
        <aside className={styles.sidebar}>
          <div className={styles.sticky}>
            <Suspense>
              <CharacterDesc />
            </Suspense>
            <SearchCharacterByName />
          </div>
        </aside>
      </main>
      <div className={styles.imageBg}>
        <Image
          src={"/bg-image.png"}
          alt="background image"
          width={467}
          height={372}
        />
      </div>
    </>
  );
};
