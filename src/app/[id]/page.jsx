import Link from "next/link";
import { notFound } from "next/navigation";
import BackButton from "./BackButton";
import styles from "./page.module.css";

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

async function getEvent(id) {
  let event = {};
  try {
    let res = await fetch(`https://admin.ungurmuiza.lv/api/events/${id}`);
    event = await res.json();
  } catch {
    console.log("API Server Error");
    return false;
  }

  const options = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  event.date =
    event.date && new Date(event.date).toLocaleDateString("lv-LV", options);
  event.date_untill =
    event.date_untill &&
    new Date(event.date_untill).toLocaleDateString("lv-LV", options);
  if (!event) notFound();
  return event;
}

export async function generateMetadata({ params }) {
  let event = await getEvent(params.id);

  return {
    title: `${event.title} - Ungurmuiža`,
    openGraph: {
      title: `${event.title} - Ungurmuiža`,
      description: `Pasākums Ungurmuižā! ${
        event.short_info ? event.short_info : ""
      }`,
      images: [
        {
          url: `https://ungurmuiza-tmp.pages.dev/meta/main.jpg`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function Page({ params }) {
  let event = await getEvent(params.id);

  if (!event) {
    return (
      <section className={styles.eventError}>
        <p>Notikusi kļūda</p>
      </section>
    );
  }

  return (
    <section className={styles.event}>
      <h1>{event.title}</h1>
      <p className={styles.time}>
        {event.date && event.date}
        {event.date_untill && ` - ${event.date_untill}`}
        {event.start_time &&
          `, plkst. ${event.start_time.replace(":", ".").substring(0, 5)}`}
        {event.end_time &&
          ` - ${event.end_time.replace(":", ".").substring(0, 5)}`}
      </p>
      <img src={`https://admin.ungurmuiza.lv/storage/${event.image}`} />
      <div
        className={styles.desc}
        dangerouslySetInnerHTML={{ __html: event.description }}
      />
      {/* <Link href="/" scroll={false}>
        Sākums
      </Link> */}
      <BackButton />
    </section>
  );
}
