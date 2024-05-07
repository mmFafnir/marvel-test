import ContentLoader from "react-content-loader";

export const Skeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={375}
      height={231}
      viewBox="0 0 375 231"
      backgroundColor="#b5b5b5"
      foregroundColor="#ecebeb"
    >
      <rect x="9" y="267" rx="0" ry="0" width="148" height="0" />
      <circle cx="16" cy="50" r="16" />
      <rect x="44" y="43" rx="0" ry="0" width="326" height="16" />
      <rect x="0" y="84" rx="0" ry="0" width="375" height="35" />
      <rect x="0" y="136" rx="0" ry="0" width="375" height="35" />
      <rect x="0" y="186" rx="0" ry="0" width="375" height="35" />
    </ContentLoader>
  );
};
