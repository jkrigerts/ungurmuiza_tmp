import styles from "./page.module.css";
import Link from "next/link";
import PageHeading from "../components/PageHeading";
import Offers from "../components/landing/Offers";
import Button from "../components/Button";

export const metadata = {
  title: "Cenas - Ungurmuiža",
  openGraph: {
    title: `Cenas - Ungurmuiža`,
    description: "Cenrādis Ungurmuižas pakalpojumiem",
    images: [
      {
        url: `https://ungurmuiza-tmp.pages.dev/meta/main.jpg`,
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function page() {
  return (
    <>
      <section className={styles.prices}>
        <PageHeading>Cenas</PageHeading>
        <iframe src="/Cenas_2025.pdf"></iframe>
        <div className={styles.priceBtnWrapper}>
          <Button href="/Cenas_2025.pdf" target="_blank">
            Cenrādis Ungurmuižas pakalpojumiem 2025
          </Button>
        </div>
      </section>
      <Offers />
    </>
  );
}
