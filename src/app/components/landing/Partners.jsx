import Partner from "./Partner";
import styles from "./Partners.module.css";

export default function Partners() {
  return (
    <section className={styles.partners}>
      <Partner
        image={{
          src: "/partners/lpma.png",
          width: 200,
          height: 167,
          alt: "Latvijas piļu un muižu asociācija",
        }}
        href="https://www.pilis.lv"
      />
      <Partner
        image={{
          src: "/partners/vidzeme.png",
          width: 200,
          height: 167,
          alt: "Vidzeme. Ceļš ved augšup",
        }}
        href="http://www.vidzeme.lv"
      />
      <Partner
        image={{
          src: "/partners/vkpai.png",
          width: 200,
          height: 167,
          alt: "Valts kultūras pieminekļu aizsardzības inspekcija",
        }}
        href="https://mantojums.lv"
      />
      <Partner
        image={{
          src: "/partners/vkkf.png",
          width: 200,
          height: 167,
          alt: "Valsts Kultūrkapitāla fonds",
        }}
        href="http://www.kkf.lv"
      />
      <Partner
        image={{
          src: "/partners/gnp.png",
          width: 200,
          height: 167,
          alt: "Gaujas Nacionālais parks",
        }}
        href="https://www.entergauja.com/lv/enter-gauja/par-regionu/gaujas-nacionalais-parks"
      />
      <Partner
        image={{
          src: "/partners/viahans.png",
          width: 200,
          height: 167,
          alt: "Via Hanseatica",
        }}
        href="https://www.viahanseatica.info/"
      />
      <Partner
        image={{
          src: "/partners/eraf.png",
          width: 200,
          height: 167,
          alt: "ERAF",
        }}
        href="https://www.esfondi.lv/"
      />
      <Partner
        image={{
          src: "/partners/enter-gauja_rd.png",
          width: 701,
          height: 705,
          alt: "Enter Gauja",
        }}
        href="https://www.entergauja.com"
        border={false}
      />
      <Partner
        image={{
          src: "/partners/booking_rd.png",
          width: 687,
          height: 692,
          alt: "Booking.com",
        }}
        href="https://www.booking.com/Share-iJkBPA"
        border={false}
      />
      <Partner
        image={{
          src: "/partners/cesu_draugu_karte_rd.png",
          width: 650,
          height: 655,
          alt: "Cēsu drauga karte",
        }}
        href="https://visit.cesis.lv"
        border={false}
      />
    </section>
  );
}
