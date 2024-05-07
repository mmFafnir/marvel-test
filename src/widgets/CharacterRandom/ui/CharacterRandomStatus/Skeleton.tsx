import ContentLoader from "react-content-loader";
import styles from "./character.random.status.module.scss";

export const Skeleton = () => {
  return (
    <div className={styles.skeleton}>
      <ContentLoader
        speed={2}
        width={496}
        height={200}
        viewBox="0 0 496 203"
        backgroundColor="#cac9c9"
      >
        <rect x="0" y="0" rx="0" ry="0" width="180" height="196" />
        <rect x="2" y="388" rx="0" ry="0" width="185" height="11" />
        <rect x="2" y="405" rx="0" ry="0" width="70" height="8" />
        <rect x="205" y="0" rx="0" ry="0" width="160" height="13" />
        <rect x="205" y="33" rx="0" ry="0" width="265" height="90" />
        <rect x="208" y="169" rx="0" ry="0" width="101" height="28" />
        <rect x="327" y="169" rx="0" ry="0" width="101" height="28" />
      </ContentLoader>
    </div>
  );
};
