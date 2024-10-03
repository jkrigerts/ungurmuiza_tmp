import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import PageHeading from "../components/PageHeading";

export const metadata = {
  title: "Par mums - Ungurmuiža",
  openGraph: {
    title: `Par mums - Ungurmuiža`,
    description:
      "Harmonisks 18. gadsimta koka ēku ansamblis, milzu ozolu ieskauts",
    images: [
      {
        url: `${process.env.HOST}/meta/main.jpg`,
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function page() {
  return (
    <>
      <section className={styles.aboutUs}>
        <PageHeading>Par mums</PageHeading>
        <div>
          <div>
            <p>
              Ungurmuiža ir harmonisks 18. gadsimta koka ēku ansamblis, milzu
              ozolu ieskauts, kas ieņem nozīmīgu vietu Latvijas kultūras
              pieminekļu mantojumu vidū. To 1732. gadā cēlis barons fon
              Kampenhauzens kā savas dzimtas māju, un šobrīd tā ir Latvijā
              vienīgā baroka koka celtne. Tikpat unikāli ir 18.&nbsp;gs. sienu
              gleznojumi.
            </p>
            <p>
              Muiža zem ozoliem un liepām – tāds ir pirmais priekšstats katram,
              kurš ierodas Ungurmuižā. Šī vieta šķiet brīnumainā kārtā
              patvērusies no likteņu vētrām. Tomēr tas nav tikai harmoniskais
              ainavas un būvmākslas savienojums, kas izraisa īpašas jūtas un
              Ungurmuižai piešķir ārkārtējības oreolu. Tā ir visam pāri lidojošā
              gaisotne, ko radījusi garīgā vide, kādā Ungurmuiža tapa un kādā
              tai bija lemts dzīvot līdz pat Pirmajam pasaules karam. Ungurmuiža
              būvēta, nevis lai ārišķīgi lepotos ar tās greznību, bet gan, lai
              muiža īpaši iekļautos apkārtējā vidē, ievērojot senas tradīcijas
              un praktiskumu. Tieši tas ir svarīgi ģenerālleitnantam Baltazaram
              fon Kampenhauzenam un viņa sievai, kad viņi sāk būvēt šo muižu.
            </p>
            <p>
              Ungurmuižas kungu māja bija viena no pirmajām vērienīgajām baroka
              būvēm, kas tika uzcelta Vidzemē pēc postošā Ziemeļu kara. Ēkas
              arhitektūra ar tās mansarda jumtu un mezonīna izbūvi kļuva par
              pirmo būvparaugu, kāds atrodams Vidzemē līdz pat 18.&nbsp;gs.
              beigām. Limbažu gleznotājs Georgs Dītrihs Hinšs pārvērta mājas
              iekšpusi, bēniņus ieskaitot, par bezgalīgu un visaptverošu
              gleznojumu pasauli, kurā viss ir mērens, saskaņots un harmonisks.
            </p>
          </div>
          <div>
            <Image
              src="/ungurmuiza-par_mums.jpeg"
              alt="Ungurmuiža"
              width={1280}
              height={853}
            />
          </div>
        </div>
        <div className={styles.reverse}>
          <div className={styles.iframeWrapper}>
            <iframe
              src="https://www.youtube.com/embed/tnEiDkRaqNk?si=B_G4Btih0OaCaePd"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <p>
              Ungurmuiža ir Gaujas nacionālā parka (Gaujas NP) tūrisma klastera
              biedrs. Klastera iniciatīva aizsākās 2011.&nbsp;gada nogalē,
              tādejādi veicinot vairāk nekā 50 iesaistīto pušu, galvenokārt,
              tūrisma uzņēmēju, sešu pašvaldību, Vidzemes Augstskolas un Dabas
              aizsardzības pārvaldes kopīgu sadarbību vienota mērķa
              sasniegšanai.
            </p>
            <p>
              Gaujas NP tūrisma klasteris izveidots, lai paaugstinātu
              konkurētspēju starptautiskā tirgū, palielinātu apmeklētāju
              uzturēšanās laiku galamērķī, mazinātu tūrisma sezonalitātes
              ietekmi, veicinātu piedāvājuma kvalitātes izaugsmi, nodrošinātu
              ilgtspējīgu attīstību un optimālu iesaistīto resursu izmantošanu
              un visu partneru apspriestu lēmumu pieņemšanu, veicinātu
              iesaistīto pušu sadarbības kultūru un pētījumu iesaisti inovāciju
              ieviešanai, kā arī citus izaicinājumus.
            </p>
            <p>
              <Link href="https://www.entergauja.com" target="_blank">
                Uzzināt vairāk!
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
