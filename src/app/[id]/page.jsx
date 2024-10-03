import Link from "next/link";
import { notFound } from "next/navigation";
import BackButton from "./BackButton";
import styles from "./page.module.css";

export const runtime = "edge";

async function getEvent(id) {
  let event = {};
  try {
    let res = await fetch(`${process.env.API_HOST}/api/events/${id}`);
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
      description: `Pasākums Ungurmuižā!${
        event.short_info ? event.short_info : ""
      }`,
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
      </p>
      <img src={`${process.env.API_HOST}/storage/${event.image}`} />
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
