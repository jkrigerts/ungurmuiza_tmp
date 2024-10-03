import Image from "next/image";

import styles from "./Offer.module.css";

export default function Offer({ image, heading, desc, href }) {
  return (
    <article className={styles.offer}>
      <Image {...image} />
      <h2>{heading}</h2>
      <p>{desc}</p>
      {href && <a href={href}>Uzzināt vairāk!</a>}
    </article>
  );
}
