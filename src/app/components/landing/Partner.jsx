import Image from "next/image";
import Link from "next/link";

import styles from "./Partner.module.css";

export default function Partner({ image, href, border = true }) {
  return (
    <Link
      className={`${styles.partner} ${!border ? styles.noBorder : ""}`}
      target="_blank"
      href={href}
    >
      <Image {...image} />
    </Link>
  );
}
