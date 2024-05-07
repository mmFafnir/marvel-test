import Image from "next/image";
import { CharactersList } from "@/widgets/CharactersList";
import styles from "./home.page.module.scss";

export const HomePage = () => {
  return (
    <>
      <main>
        <CharactersList />
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
