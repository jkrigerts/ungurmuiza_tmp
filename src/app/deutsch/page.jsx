import styles from "./page.module.css";
import TitleImage from "../components/landing/TitleImage";
import LandingHeading from "../components/landing/LandingHeading";
import Offer from "../components/landing/Offer";
import Button from "../components/Button";

export const metadata = {
  title: "Ungurmuiža (Orellen)",
  openGraph: {
    title: `Ungurmuiža (Orellen)`,
    description:
      "Ein einzigartiges Herrenhaus aus Holz aus dem 18. Jahrhundert",
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
        subheading="Ein einzigartiges Herrenhaus aus Holz aus dem 18. Jahrhundert"
        lead="Entdecken Sie die Schönheit und die Ruhe von Ungurmuiža. Setzen Sie Ihre innere Gelassenheit mit uns wieder her."
      />
      <section className={styles.about}>
        <article>
          <h2 className={styles.heading}>
            Über das Herrenhaus Ungurmuiža (Orellen)
          </h2>
          <p>
            Das Gutshof Orellen ist das einzige noch erhaltene aus Holz gebaute
            Architekturdenkmal des Barock aus dem 18. Jahrhundert. Das Ensemble
            des Gutshofs wurde von Baron von Campenhausen 1732 als Familiensitz
            erbaut. Es wurde in seiner früheren Schönheit wieder restauriert.
            Die Innenmalereien sind in einem sehr guten Zustand erhalten
            geblieben.
          </p>
          <p>
            Der einzige Holzbau des Barockstils in Lettland mit einzigartigen
            Wandgemälden nimmt gern die Gäste auf! Ausflüge in der lettischen,
            russischen, englischen und deutschen Sprache an.
          </p>
          <p>
            Die besondere Stimmung von Ungurmuiža fühlt jeder – Kunstgenießer,
            Historiker und Naturliebhaber. Es ist ein Ort für die romantischen
            Spaziergänge, Feier, Erholung mit der Familie. Die alten Eichen und
            Linden erzählen über die jahrhundertlangen Verhältnisse zwischen der
            Natur und des Menschen und geben ihr Segen für die nächtsten
            Generationen weiter.
          </p>
        </article>
        <article>
          <h2 className={styles.heading}>Unterhaltung</h2>
          <p>
            Als Tradition sind die Konzerte im Sommer unter freiem Himmel im
            Park geworden, die von vielen Genießern der klassischen Musik
            ausgekostet und besucht werden. Während der Wintersaison laden die
            kleinen, traditionellen Musikabende die Gäste zum Gut Ungurmuiža
            ein. In der Ausstellungshalle kann man sich die Ausstellungen
            lettischer Künstler ansehen.
          </p>
          <p>
            Der Feierraum, die Terasse und der Park im Herrenhaus sind gute Orte
            für die Hochzeit und Trauung. Nach der Zeremonie können Sie die
            Champagnergläser anstoßen, sich das alte Gebäude ansehen oder die
            Liebebescheinigung unter den alten Eichen aufschreiben. Der Gutpark
            ist ein nicht zu wiederholender Fotosalon.
          </p>
        </article>
        <article>
          <h2 className={styles.heading}>Restaurant</h2>
          <p>
            Für diejenigen, die köstlichen Mahlzeiten aus den lokalen
            Saisonprodukten und mit jahrundertalten Rezepten werten, ist das
            Restaurant Ungurmuiža geöffnet!
          </p>
          <p>
            Die Köche unseres Restaurants hören Ihre Wünsche gern an. Bei
            vorheriger Anmeldung werden wir den Tisch für ihr Feier zu
            gewünschter Zeit im Restaurant, im Herrenhaus, im Teehaus oder im
            Gutpark decken.
          </p>
        </article>
        <article>
          <h2 className={styles.heading}>Unterkunft</h2>
          <p>
            Im Herrenhaus haben wir zwei Gästezimmer für die Übernachtungen in
            der Sommersaison. Dortselbst, in der Nähe, in der „alten Schule”
            bieten wir drei Appartements an. Während der Maßnahmen können wir
            zusätzliche Betten einrichten und bis 60 Personen, im Winter bis 30
            Personen aufnehmen.
          </p>
        </article>
      </section>
      <section className={styles.offersWrapper}>
        <h2 className={styles.heading}>Ungurmuiža bietet an</h2>
        <div className={styles.offers}>
          <Offer
            image={{
              src: "/offers/koncerti2.jpeg",
              width: 520,
              height: 315,
              alt: "Konzerte und Festivals",
            }}
            heading="Konzerte und Festivals"
            desc="Konzert- und Festivalorganisation"
          />
          <Offer
            image={{
              src: "/offers/ekskursijas.jpeg",
              width: 320,
              height: 213,
              alt: "Geführte Touren",
            }}
            heading="Geführte Touren"
            desc="Geführte Touren für Einzelpersonen und Gruppen auf Lettisch oder in einer Fremdsprache"
          />
          <Offer
            image={{
              src: "/offers/telpas.jpg",
              width: 320,
              height: 213,
              alt: "Feiern",
            }}
            heading="Feiern"
            desc="Innen- und Außenbereich für Feiern, Seminare, Workshops"
          />
          <Offer
            image={{
              src: "/offers/kazas.jpeg",
              width: 320,
              height: 213,
              alt: "Hochzeiten",
            }}
            heading="Hochzeiten"
            desc="Der Bankettsaal, die Terrasse und der Park des Herrenhauses bieten die perfekte Kulisse für Hochzeiten, Champagnerempfänge und unvergessliche Fotos unter alten Eichen"
          />
          <Offer
            image={{
              src: "/offers/restorans.jpg",
              width: 320,
              height: 213,
              alt: "Restaurant",
            }}
            heading="Restaurant"
            desc="Im Restaurant von Ungurmuiža ist jeder willkommen, der eine köstliche Mahlzeit aus lokalen saisonalen Produkten zu schätzen weiß"
          />
          <Offer
            image={{
              src: "/offers/naksnosana.jpeg",
              width: 320,
              height: 213,
              alt: "Unterkunft",
            }}
            heading="Unterkunft"
            desc="Romantische Unterkunft aus dem 18. Jahrhundert mit modernen Annehmlichkeiten – 8 Zimmer"
          />
          <Offer
            image={{
              src: "/offers/pastaiga.jpeg",
              width: 320,
              height: 213,
              alt: "Spaziergänge im Eichhain",
            }}
            heading="Spaziergänge im Eichhain"
            desc="Hier ist ein Ort für romantische Spaziergänge, wo alte Eichen und Linden die Geschichte der Beziehung zwischen Natur und Mensch über Jahrhunderte hinweg erzählen"
          />
        </div>
      </section>
      <section className={styles.opening}>
        <h2 className={styles.heading}>Öffnungszeiten</h2>
        <h3>Museumsöffnungszeiten</h3>
        <p>Mittwoch – Sonntag 10.00 – 16.00</p>
        <h3 style={{ marginTop: 20 }}>Restaurantöffnungszeiten</h3>
        <p>Mittwoch – Samstag 12.00 – 20.00</p>
        <p>Sonntag – 12.00 – 18.00</p>
        <p>
          Bitte rufen Sie an, um eine Reservierung vorzunehmen:{" "}
          <a href="tel:+37122007332">+371 22007332</a>
        </p>
      </section>
      <section className={styles.info}>
        <h2 className={styles.heading}>Preisliste</h2>
        <iframe src="/Price-list_2025.pdf"></iframe>
        <div className={styles.wrapper}>
          <Button href="/Price-list_2025.pdf">Preisliste</Button>
        </div>
      </section>
      <section className={styles.info}>
        <h2 className={styles.heading}>Menü</h2>
        <iframe src="/Menu-fall_2024.pdf"></iframe>
        <div className={`${styles.wrapper} ${styles.mb70}`}>
          <Button href="/Menu-fall_2024.pdf">Restaurant Menü</Button>
        </div>
        <iframe src="/Drinks-summer-2024.pdf"></iframe>
        <div className={styles.wrapper}>
          <Button href="/Drinks-summer-2024.pdf">Restaurant Getränke</Button>
        </div>
        <iframe src="/Ligante_winery.pdf" style={{ marginTop: 50 }}></iframe>
        <div className={styles.wrapper}>
          <Button href="/Ligante_winery.pdf">Līgatne winery</Button>
        </div>
      </section>
    </>
  );
}
