import styles from "./page.module.css";
import PageHeading from "../components/PageHeading";
import Offers from "../components/landing/Offers";
import Button from "../components/Button";
import Image from "next/image";
import Album from "../components/Album";

export const metadata = {
  title: "Restorāns - Ungurmuiža",
  openGraph: {
    title: `Restorāns - Ungurmuiža`,
    description:
      "Restorānā gaidīts ikviens, kurš novērtē gardu maltīti no vietējiem sezonas produktiem!",
    images: [
      {
        url: `https://ungurmuiza-tmp.pages.dev/meta/restaurant.jpg`,
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function page() {
  const restaurant = [
    {
      largeURL: "/gallery/restaurant/lg/01.jpeg",
      width: 2047,
      height: 1153,
      thumbnailURL: "/gallery/restaurant/sm/01.jpeg",
    },
    {
      largeURL: "/gallery/restaurant/lg/02.jpeg",
      width: 780,
      height: 520,
      thumbnailURL: "/gallery/restaurant/sm/02.jpeg",
    },
    {
      largeURL: "/gallery/restaurant/lg/03.jpeg",
      width: 780,
      height: 520,
      thumbnailURL: "/gallery/restaurant/sm/03.jpeg",
    },
    {
      largeURL: "/gallery/restaurant/lg/04.jpeg",
      width: 2048,
      height: 1365,
      thumbnailURL: "/gallery/restaurant/sm/04.jpeg",
    },
    {
      largeURL: "/gallery/restaurant/lg/05.jpeg",
      width: 2048,
      height: 1406,
      thumbnailURL: "/gallery/restaurant/sm/05.jpeg",
    },
    {
      largeURL: "/gallery/restaurant/lg/06.jpeg",
      width: 780,
      height: 520,
      thumbnailURL: "/gallery/restaurant/sm/06.jpeg",
    },
    {
      largeURL: "/gallery/restaurant/lg/07.jpeg",
      width: 1024,
      height: 683,
      thumbnailURL: "/gallery/restaurant/sm/07.jpeg",
    },
    {
      largeURL: "/gallery/restaurant/lg/08.jpeg",
      width: 780,
      height: 520,
      thumbnailURL: "/gallery/restaurant/sm/08.jpeg",
    },
    {
      largeURL: "/gallery/restaurant/lg/09.jpg",
      width: 1030,
      height: 556,
      thumbnailURL: "/gallery/restaurant/sm/09.jpg",
    },
    {
      largeURL: "/gallery/restaurant/lg/10.jpg",
      width: 1030,
      height: 544,
      thumbnailURL: "/gallery/restaurant/sm/10.jpg",
    },
    {
      largeURL: "/gallery/restaurant/lg/11.jpg",
      width: 717,
      height: 348,
      thumbnailURL: "/gallery/restaurant/sm/11.jpg",
    },
    {
      largeURL: "/gallery/restaurant/lg/12.jpg",
      width: 438,
      height: 330,
      thumbnailURL: "/gallery/restaurant/sm/12.jpg",
    },
    {
      largeURL: "/gallery/restaurant/lg/13.jpg",
      width: 588,
      height: 414,
      thumbnailURL: "/gallery/restaurant/sm/13.jpg",
    },
    {
      largeURL: "/gallery/restaurant/lg/14.jpg",
      width: 1730,
      height: 1053,
      thumbnailURL: "/gallery/restaurant/sm/14.jpg",
    },
    {
      largeURL: "/gallery/restaurant/lg/15.jpg",
      width: 1030,
      height: 773,
      thumbnailURL: "/gallery/restaurant/sm/15.jpg",
    },
  ];

  return (
    <>
      <section className={styles.restaurant}>
        <PageHeading>Restorāns</PageHeading>
        <Image src="/restorans.jpg" alt="Restorānā" width={845} height={321} />
        <article>
          <p>
            Ungurmuižas restorānā gaidīts ikviens, kurš novērtē gardu maltīti no
            vietējiem sezonas produktiem! Te ēdiens tiek gatavots lēnām un
            pamatīgi.
          </p>
          <p>
            Saklāsim galdu restorānā, muižā vai senajā parkā – Jūsu svinībām,
            kāzām, lietišķām pusdienām vai semināriem!{" "}
          </p>
        </article>
        <article>
          <h2 className={styles.heading}>Darba laiks</h2>
          <p>
            <strong>Restorāns tehnisku iemeslu dēļ ir īslaicīgi slēgts</strong>
          </p>
          <p style={{ marginTop: 10 }}>
            Vairāk informācijas, zvanot:{" "}
            <a href="tel:+37122007332">+371 22007332</a>
          </p>
          <p style={{ marginTop: 10 }}>
            Restorānā ievest dzīvniekus nav atļauts.
          </p>
        </article>
        <article>
          <h2 className={styles.heading}>Ēdienkarte</h2>
          <iframe src="/Edienkarte_rudens_ziema_2024.pdf"></iframe>
          <div className={`${styles.wrapper} ${styles.mb70}`}>
            <Button href="/Edienkarte_rudens_ziema_2024.pdf">Ēdienkarte</Button>
          </div>
          <iframe src="/Edienkarte_mazajiem_edajiem_2024.pdf"></iframe>
          <div className={`${styles.wrapper} ${styles.mb70}`}>
            <Button href="/Edienkarte_mazajiem_edajiem_2024.pdf">
              Ēdienkarte mazajiem ēdājiem
            </Button>
          </div>
          <iframe src="/Dzerienkarte-RUDENS_ZIEMA-2024.pdf"></iframe>
          <div className={`${styles.wrapper} ${styles.mb70}`}>
            <Button href="/Dzerienkarte-RUDENS_ZIEMA-2024.pdf">
              Dzērienkarte
            </Button>
          </div>
          <iframe src="/Ligantes_vina_daritava.pdf"></iframe>
          <div className={styles.wrapper}>
            <Button href="/Ligantes_vina_daritava.pdf">
              Līgatnes vīna darītava
            </Button>
          </div>
        </article>
      </section>
      <section className={styles.gallery}>
        <Album id="restaurant" images={restaurant} />
      </section>
    </>
  );
}
