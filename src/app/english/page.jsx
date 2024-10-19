import styles from "./page.module.css";
import PageHeading from "../components/PageHeading";
import TitleImage from "../components/landing/TitleImage";
import LandingHeading from "../components/landing/LandingHeading";
import Offers from "../components/landing/Offers";
import Offer from "../components/landing/Offer";
import Button from "../components/Button";

export const metadata = {
  title: "Ungurmuiža",
  openGraph: {
    title: `Ungurmuiža`,
    description: "A unique 18th-century wooden architectural manor",
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
      <TitleImage />
      <LandingHeading
        heading="Ungurmuiža"
        subheading="A unique 18th-century wooden architectural manor"
        lead="Discover the beauty and tranquility of Ungurmuiža. Restore your inner serenity with us."
      />
      <section className={styles.about}>
        <article>
          <h2 className={styles.heading}>About Ungurmuiža Manor</h2>
          <p>
            Ungurmuiža manor house ensemble with the Baroque style manor house
            is the only architectural monument of the 18th century wooden
            baroque buildings preserved in Latvia.
          </p>
          <p>
            The unique Latvian baroque style wooden building with its one-off
            wall-paintings heartily welcomes visitors. Tours are available in
            Latvian, Russian, English, and German.
          </p>
          <p>
            The special atmosphere of the Ungurmuiža will affect everyone – art
            and nature lovers, historians… This is a place for romantic walks,
            celebrations, or family leisure activities; this is the place where
            old oaks and lindens tell stories about the centuries long
            relationships between nature and human beings and give blessing to
            next generations.
          </p>
        </article>
        <article>
          <h2 className={styles.heading}>Entertainment</h2>
          <p>
            Concerts in summers that gather hundreds of viewers who enjoy
            classical music in the open air at the atmosphere of the park had
            become a tradition. In the wintertime, in evenings, visitors are
            welcome to spend time at the traditional small music venues of
            Ungurmuiža; besides it is possible to see the Latvian artists’ works
            at the exhibition hall. The ballroom of the Manor House, terrace, or
            park is perfect for a wedding ceremony where you can clink the
            champagne glasses after the official part of the event, enjoy the
            look of the historical building, or write the wedding vows under the
            old oaks. The park of the Manor House is a remarkable photography
            studio of the nature.
          </p>
        </article>
        <article>
          <h2 className={styles.heading}>Restaurant</h2>
          <p>
            The restaurant of the Ungurmuiža is open for those who love
            delicious meals from seasonal products and centuries old recipes.
            The chefs of the Ungurmuiža will be glad to hear your desires and
            will prepare meal for your celebrations in the restaurant, Manor
            House, Tea House, or park at any time convenient for you. Order your
            meal in advance!
          </p>
        </article>
        <article>
          <h2 className={styles.heading}>Accommodation</h2>
          <p>
            In summer, it is possible to stay in Manor House where two guest
            rooms are or choose one of tree apartments in the “old school”. At
            the time of events 60 overnight guests (including extra beds) can be
            accommodated (30 overnight guests in wintertime).
          </p>
        </article>
      </section>
      <section className={styles.offersWrapper}>
        <h2 className={styles.heading}>Ungurmuiža offers</h2>
        <div className={styles.offers}>
          <Offer
            image={{
              src: "/offers/koncerti2.jpeg",
              width: 520,
              height: 315,
              alt: "Concerts and festivals",
            }}
            heading="Concerts and festivals"
            desc="Concert and festival organization"
          />
          <Offer
            image={{
              src: "/offers/ekskursijas.jpeg",
              width: 320,
              height: 213,
              alt: "Tours",
            }}
            heading="Guided Tours"
            desc="Guided tours for individuals and groups in Latvian or foreign language"
          />
          <Offer
            image={{
              src: "/offers/telpas.jpg",
              width: 320,
              height: 213,
              alt: "Celebrations",
            }}
            heading="Celebrations"
            desc="Indoor/outdoor area for celebrations, seminars, workshops"
          />
          <Offer
            image={{
              src: "/offers/kazas.jpeg",
              width: 320,
              height: 213,
              alt: "Weddings",
            }}
            heading="Weddings"
            desc="The manor’s banquet hall, terrace, and park offer a perfect setting for weddings, champagne toasts, and memorable photos under ancient oaks"
          />
          <Offer
            image={{
              src: "/offers/restorans.jpg",
              width: 320,
              height: 213,
              alt: "Restaurant",
            }}
            heading="Restaurant"
            desc="Everyone who appreciates a delicious meal made from local seasonal products is welcome at the Ungurmuiža restaurant"
          />
          <Offer
            image={{
              src: "/offers/naksnosana.jpeg",
              width: 320,
              height: 213,
              alt: "Accommodation",
            }}
            heading="Accommodation"
            desc="Romantic 18th century accommodation and modern facilities – 8 rooms"
          />
          <Offer
            image={{
              src: "/offers/pastaiga.jpeg",
              width: 320,
              height: 213,
              alt: "Walks in the oak grove",
            }}
            heading="Walks in the oak grove"
            desc="Here is a place for romantic walks, where ancient oaks and lindens tell the story of the relationship between nature and humans over centuries"
          />
        </div>
      </section>
      <section className={styles.opening}>
        <h2 className={styles.heading}>Opening hours</h2>
        <h3>Museum Opening hours</h3>
        <p>Tuesday – Sunday 10.00 – 18.00</p>
        <h3 style={{ marginTop: 20 }}>Restaurant Opening hours</h3>
        <p>Tuesday – Saturday 12.00 – 20.00</p>
        <p>Sunday – 12.00 – 18.00</p>
        <p>
          Please call to make a reservation:{" "}
          <a href="tel:+37122007332">+371 22007332</a>
        </p>
      </section>
      <section className={styles.info}>
        <h2 className={styles.heading}>Price List</h2>
        <iframe src="/Price-list_2024.pdf"></iframe>
        <div className={styles.wrapper}>
          <Button href="/Price-list_2024.pdf">Price list</Button>
        </div>
      </section>
      <section className={styles.info}>
        <h2 className={styles.heading}>Menu</h2>
        <iframe src="/Menu-fall_2024.pdf"></iframe>
        <div className={`${styles.wrapper} ${styles.mb70}`}>
          <Button href="/Menu-fall_2024.pdf">Meals Menu</Button>
        </div>
        <iframe src="/Drinks-summer-2024.pdf"></iframe>
        <div className={styles.wrapper}>
          <Button href="/Drinks-summer-2024.pdf">Beverage Menu</Button>
        </div>
        <iframe src="/Ligante_winery.pdf" style={{ marginTop: 50 }}></iframe>
        <div className={styles.wrapper}>
          <Button href="/Ligante_winery.pdf">Līgatne winery</Button>
        </div>
      </section>
    </>
  );
}
