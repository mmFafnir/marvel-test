import Image from "next/image";
import avengersLogoImg from "../../images/avengers-logo.png";
import avengersImg from "../../images/avengers.png";
import styles from "./new.comics.banner.module.scss";

export const NewComicsBanner = () => {
  return (
    <div className={styles.body}>
      <Image
        src={avengersImg}
        width={152}
        alt="avengers"
        className={styles.teamImage}
      />
      <h2 className={styles.text}>
        New comics every week! <br /> Stay tuned!
      </h2>
      <Image src={avengersLogoImg} width={133} alt="avengers logo" />
    </div>
  );
};
