import styles from "./LandingHeading.module.css";

export default function LandingHeading({ heading, subheading, lead }) {
  return (
    <section className={styles.heading}>
      <h1>{heading}</h1>
      <h2>{subheading}</h2>
      <p className={styles.lead}>{lead}</p>
    </section>
  );
}
