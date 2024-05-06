import { ComicsList } from "@/widgets/ComicsList";
import styles from "./comics.page.module.scss";
export const ComicsPage = () => {
  return (
    <main className={styles.body}>
      <ComicsList />
    </main>
  );
};
