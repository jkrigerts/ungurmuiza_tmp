import styles from "./PageHeading.module.css";

export default function PageHeading({ children }) {
  return <h1 className={styles.heading}>{children}</h1>;
}
