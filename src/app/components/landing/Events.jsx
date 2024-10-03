import Link from "next/link";
import React from "react";
import styles from "./Events.module.css";

export default async function Events() {
  let events = [];
  try {
    let data = await fetch(`${process.env.API_HOST}/api/events`);
    events = await data.json();
  } catch {
    console.log("API Server Error");
    return (
      <p className={styles.eventError}>Šobrīd nav atrasts neviens notikums!</p>
    );
  }

  return (
    <ul className={styles.events}>
      {events.map((event) => (
        <li key={event.id} className={styles.event}>
          <Link href={`/${event.id}`}>
            <div>
              <h4>{event.title}</h4>
              {event.date && (
                <p className={styles.time}>
                  {new Date(event.date).toLocaleDateString("lv-LV", {
                    month: "long",
                    day: "numeric",
                  })}{" "}
                  {event.date_untill &&
                    `- ${new Date(event.date_untill).toLocaleDateString(
                      "lv-LV",
                      {
                        month: "long",
                        day: "numeric",
                      }
                    )}`}
                </p>
              )}
              {event.short_info && (
                <p className={styles.info}>{event.short_info}</p>
              )}
            </div>
            <img src={`${process.env.API_HOST}/storage/${event.image}`} />
          </Link>
        </li>
      ))}
    </ul>
  );
}