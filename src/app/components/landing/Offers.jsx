import Offer from "./Offer";
import styles from "./Offers.module.css";

export default function Offers() {
  return (
    <section className={styles.offers}>
      <Offer
        image={{
          src: "/offers/koncerti2.jpeg",
          width: 520,
          height: 315,
          alt: "Koncerti un pasākumi",
        }}
        heading="Koncerti un pasākumi"
        desc="Par tradīciju kļuvuši koncerti, pulcējot simtiem skatītājus, kas vasarās zem klajas debess vēlas izbaudīt klasiskās mūzikas skanējumu. Ziemas sezonā ciemos aicina Ungurmuižas Mūzikas un vīna vakari! Izstāžu zālē apskatāmas latviešu mākslinieku darbu izstādes."
      />
      <Offer
        image={{
          src: "/offers/ekskursijas.jpeg",
          width: 320,
          height: 213,
          alt: "Ekskursijas",
        }}
        heading="Ekskursijas"
        desc="18. gadsimta koka ēku ansamblis ir vienīgais Latvijā saglabājies baroka koka pils arhitektūras paraugs, kur iekštelpas bagātīgi greznotas ar sienu gleznojumiem. Senā koka celtne labprāt uzņem viesus! Iepriekš piesakot, piedāvājam ekskursijas latviešu, krievu, angļu un vācu valodās."
      />
      <Offer
        image={{
          src: "/offers/telpas.jpg",
          width: 320,
          height: 213,
          alt: "Telpas svinībām",
        }}
        heading="Telpas svinībām"
        desc="Jūsu pasākumiem un svinībām piedāvājam izīrēt visu muižas kompleksu vai Kungu mājas zāles (trīs, savā starpā savienotas zāles, katra 45m2). Tiksimies un uzklausīsim Jūsu vēlmes, lai pasākums būtu izdevies!"
      />
      <Offer
        image={{
          src: "/offers/kazas.jpeg",
          width: 320,
          height: 213,
          alt: "Kāzas",
        }}
        heading="Kāzas"
        desc="Kungu mājas svinību zāle, terase vai parks ir lieliska vieta kāzām un laulību ceremonijām. Pēc ceremonijas varēsiet saskandināt šampanieša glāzes, aplūkot seno ēku vai uzrakstīt mīlestības apliecinājumu turpat zem senajiem ozoliem. Muižas parks ir neatkārtojams dabas fotosalons!"
      />
      <Offer
        image={{
          src: "/offers/restorans.jpg",
          width: 320,
          height: 213,
          alt: "Restorāns",
        }}
        heading="Restorāns"
        desc="Ungurmuižas restorānā gaidīts ikviens, kurš novērtē gardu maltīti no vietējiem sezonas produktiem! Te ēdiens tiek gatavots lēnām un pamatīgi."
      />
      <Offer
        image={{
          src: "/offers/naksnosana.jpeg",
          width: 320,
          height: 213,
          alt: "Nakšņošana",
        }}
        heading="Nakšņošana"
        desc="Nakšņošanai Kungu mājā atrodas divas viesu istabas. Turpat blakus, „vecajā skolā” tiek piedāvāti 3 apartamenti. Pasākumos, izvietojot papildus gultas vietas, Ungurmuižā iespējams uzņemt līdz 60 personām, ziemā līdz 30 personām."
        // href="/naksnosana"
      />
      <Offer
        image={{
          src: "/offers/pastaiga.jpeg",
          width: 320,
          height: 213,
          alt: "Pastaigas parkā",
        }}
        heading="Pastaigas parkā"
        desc="Ungurmuižas īpašo noskaņu izjūt ikviens – mākslas baudītāji, vēstures pētnieki un dabas mīļotāji. Šeit ir vieta romantiskām pastaigām, svinībām, atpūtai ar ģimeni, kur senie ozoli un liepas stāsta par dabas un cilvēka attiecībām gadsimtu garumā un nodod svētību nākamajām paaudzēm."
      />
    </section>
  );
}
