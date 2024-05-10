import { ComicsList } from "@/widgets/ComicsList";
import { NewComicsBanner } from "@/entities/Banners";
import styles from "./comics.page.module.scss";

export const ComicsPage = () => {
  return (
    <>
      <NewComicsBanner />
      <main className={styles.body}>
        <ComicsList />
      </main>
    </>
  );
};
