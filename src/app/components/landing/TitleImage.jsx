import Image from "next/image";
import styles from "./TitleImage.module.css";

export default function TitleImage() {
  return (
    <div className={styles.landingImageWrapper}>
      <Image
        src="/bg.jpeg"
        width={1280}
        height={853}
        className={styles.image}
        alt="Ungurmuiža miglā"
        priority={true}
      ></Image>
      <Image
        src="/keyboard_arrow_down.svg"
        alt="Down"
        height={24}
        width={24}
        className={styles.arrow}
      ></Image>
    </div>
  );
}
