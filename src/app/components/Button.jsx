import Link from "next/link";
import styles from "./Button.module.css";

export default function Button({ href, children }) {
  return (
    <Link href={href} target="_blank" className={styles.button}>
      {children}
    </Link>
  );
}
