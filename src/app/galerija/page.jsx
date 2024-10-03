import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import PageHeading from "../components/PageHeading";
import Album from "../components/Album";

export const metadata = {
  title: "Galerija - Ungurmuiža",
  openGraph: {
    title: `Galerija - Ungurmuiža`,
    description:
      "Iepazīsti Ungurmuižu jebkur un ierodies baudīt tās būrvību klātienē!",
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
  const manor = [
    {
      largeURL: "/gallery/manor/lg/01.jpeg",
      width: 1200,
      height: 825,
      thumbnailURL: "/gallery/manor/sm/01.jpeg",
    },
    {
      largeURL: "/gallery/manor/lg/02.jpeg",
      width: 1200,
      height: 853,
      thumbnailURL: "/gallery/manor/sm/02.jpeg",
    },
    {
      largeURL: "/gallery/manor/lg/03.jpeg",
      width: 1200,
      height: 853,
      thumbnailURL: "/gallery/manor/sm/03.jpeg",
    },
    {
      largeURL: "/gallery/manor/lg/04.jpeg",
      width: 1024,
      height: 456,
      thumbnailURL: "/gallery/manor/sm/04.jpeg",
    },
    {
      largeURL: "/gallery/manor/lg/05.jpeg",
      width: 1024,
      height: 529,
      thumbnailURL: "/gallery/manor/sm/05.jpeg",
    },
    {
      largeURL: "/gallery/manor/lg/06.jpeg",
      width: 600,
      height: 400,
      thumbnailURL: "/gallery/manor/sm/06.jpeg",
    },
    {
      largeURL: "/gallery/manor/lg/07.jpeg",
      width: 1280,
      height: 853,
      thumbnailURL: "/gallery/manor/sm/07.jpeg",
    },
    {
      largeURL: "/gallery/manor/lg/08.jpeg",
      width: 667,
      height: 404,
      thumbnailURL: "/gallery/manor/sm/08.jpeg",
    },
    {
      largeURL: "/gallery/manor/lg/09.jpeg",
      width: 667,
      height: 404,
      thumbnailURL: "/gallery/manor/sm/09.jpeg",
    },
    {
      largeURL: "/gallery/manor/lg/10.jpg",
      width: 1024,
      height: 683,
      thumbnailURL: "/gallery/manor/sm/10.jpg",
    },
  ];

  const rooms = [
    {
      largeURL: "/gallery/rooms/lg/Lilija.png",
      width: 1030,
      height: 773,
      thumbnailURL: "/gallery/rooms/sm/Lilija.png",
    },
    {
      largeURL: "/gallery/rooms/lg/Baltazars.jpeg",
      width: 1030,
      height: 773,
      thumbnailURL: "/gallery/rooms/sm/Baltazars.jpeg",
    },
    {
      largeURL: "/gallery/rooms/lg/03.jpg",
      width: 768,
      height: 986,
      thumbnailURL: "/gallery/rooms/sm/03.jpg",
    },
    {
      largeURL: "/gallery/rooms/lg/Hermanis.jpg",
      width: 1024,
      height: 683,
      thumbnailURL: "/gallery/rooms/sm/Hermanis.jpg",
    },
    {
      largeURL: "/gallery/rooms/lg/Sarlote.jpg",
      width: 1024,
      height: 768,
      thumbnailURL: "/gallery/rooms/sm/Sarlote.jpg",
    },
    {
      largeURL: "/gallery/rooms/lg/Heinrihs.jpg",
      width: 1030,
      height: 715,
      thumbnailURL: "/gallery/rooms/sm/Heinrihs.jpg",
    },
    {
      largeURL: "/gallery/rooms/lg/Huberts.jpg",
      width: 1024,
      height: 768,
      thumbnailURL: "/gallery/rooms/sm/Huberts.jpg",
    },
    {
      largeURL: "/gallery/rooms/lg/Doroteja.png",
      width: 1030,
      height: 773,
      thumbnailURL: "/gallery/rooms/sm/Doroteja.png",
    },
    {
      largeURL: "/gallery/rooms/lg/Rozmarija.jpg",
      width: 1030,
      height: 773,
      thumbnailURL: "/gallery/rooms/sm/Rozmarija.jpg",
    },
    {
      largeURL: "/gallery/rooms/lg/10.jpg",
      width: 1030,
      height: 773,
      thumbnailURL: "/gallery/rooms/sm/10.jpg",
    },
  ];

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

  const events = [
    {
      largeURL: "/gallery/events/lg/01.jpeg",
      width: 960,
      height: 720,
      thumbnailURL: "/gallery/events/sm/01.jpeg",
    },
    {
      largeURL: "/gallery/events/lg/02.jpg",
      width: 1030,
      height: 773,
      thumbnailURL: "/gallery/events/sm/02.jpg",
    },
    {
      largeURL: "/gallery/events/lg/03.jpeg",
      width: 520,
      height: 315,
      thumbnailURL: "/gallery/events/sm/03.jpeg",
    },
    {
      largeURL: "/gallery/events/lg/04.jpeg",
      width: 1030,
      height: 580,
      thumbnailURL: "/gallery/events/sm/04.jpeg",
    },
    {
      largeURL: "/gallery/events/lg/05.jpeg",
      width: 667,
      height: 404,
      thumbnailURL: "/gallery/events/sm/05.jpeg",
    },
    {
      largeURL: "/gallery/events/lg/06.jpeg",
      width: 640,
      height: 960,
      thumbnailURL: "/gallery/events/sm/06.jpeg",
    },
    {
      largeURL: "/gallery/events/lg/07.jpeg",
      width: 1000,
      height: 667,
      thumbnailURL: "/gallery/events/sm/07.jpeg",
    },
    {
      largeURL: "/gallery/events/lg/08.jpg",
      width: 1030,
      height: 579,
      thumbnailURL: "/gallery/events/sm/08.jpg",
    },
    {
      largeURL: "/gallery/events/lg/09.jpg",
      width: 1024,
      height: 683,
      thumbnailURL: "/gallery/events/sm/09.jpg",
    },
    {
      largeURL: "/gallery/events/lg/10.jpg",
      width: 1030,
      height: 773,
      thumbnailURL: "/gallery/events/sm/10.jpg",
    },
    {
      largeURL: "/gallery/events/lg/11.jpg",
      width: 1030,
      height: 686,
      thumbnailURL: "/gallery/events/sm/11.jpg",
    },
    {
      largeURL: "/gallery/events/lg/12.jpg",
      width: 1030,
      height: 773,
      thumbnailURL: "/gallery/events/sm/12.jpg",
    },
    {
      largeURL: "/gallery/events/lg/13.jpg",
      width: 1030,
      height: 828,
      thumbnailURL: "/gallery/events/sm/13.jpg",
    },
    {
      largeURL: "/gallery/events/lg/14.jpg",
      width: 1030,
      height: 687,
      thumbnailURL: "/gallery/events/sm/14.jpg",
    },
  ];

  return (
    <>
      <section className={styles.gallery}>
        <PageHeading>Galerija</PageHeading>
        <p className={styles.tr}>
          Apskatiet Ungurmuižu, tās apkārtni un telpas 3 dimensijās:{` `}
          <Link
            href="http://www.viss.lv/?v=151129
"
            target="_blank"
          >
            apskatīt 3D
          </Link>
          !
        </p>

        <Album heading="Muiža" id="manor" images={manor} />
        <Album heading="Istabiņas" id="rooms" images={rooms} />
        <Album heading="Restorāns" id="restaurant" images={restaurant} />
        <Album heading="Pasākumi" id="events" images={events} />
      </section>
    </>
  );
}
