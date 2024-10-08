import Image from "next/image";

import styles from "./page.module.css";
import Offers from "./components/landing/Offers";
import Partners from "./components/landing/Partners";
import TitleImage from "./components/landing/TitleImage";
import LandingHeading from "./components/landing/LandingHeading";
import Events from "./components/landing/Events";

export const runtime = "edge";

export const revalidate = 60;

export const dynamicParams = true;

export async function generateStaticParams() {
  const events = await fetch("https://admin.ungurmuiza.lv/api/events").then(
    (res) => res.json()
  );
  return events.map((event) => ({
    id: String(event.id),
  }));
}

export default function page() {
  return (
    <>
      <TitleImage />
      <LandingHeading
        heading="Ungurmuiža"
        subheading="unikāls 18. gadsimta koka arhitektūras ansamblis"
        lead="...Varbūt īpašais Ungurmuižas burvīgums radās no tā, ka te pagātne
          bija tik dzīvi saglabāta, ka to kā tuvu un mājīgu sajuta katrā loga
          nišā, katrā istabas stūrī, uz katra sliekšņa un katrā brīkšķošā
          sensenā ozolkoka sijā..."
      />
      <Events />
      <Offers />
      <Partners />
    </>
  );
}
