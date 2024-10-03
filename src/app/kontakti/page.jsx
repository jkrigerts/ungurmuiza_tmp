import Button from "../components/Button";
import PageHeading from "../components/PageHeading";
import styles from "./page.module.css";

export const metadata = {
  title: "Kontakti - Ungurmuiža",
  openGraph: {
    title: `Kontakti - Ungurmuiža`,
    description: "E-pasts: info@ungurmuiza.lv, telefona numurs: +371 22007332",
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
    <section className={styles.contacts}>
      <PageHeading>Kontakti</PageHeading>
      <div>
        <div>
          <h2>E-pasts</h2>
          <a href="mailto:info@ungurmuiza.lv">info@ungurmuiza.lv</a>
          <h2>Telefons</h2>
          <a href="tel:+37122007332">+371 22007332</a>

          <h2>Adrese</h2>
          <p>
            <em>Ungurmuiža</em>
          </p>
          <p>Raiskuma pagasts</p>
          <p>Cēsu novads</p>
          <p>Latvija</p>
          <p>LV-4146</p>
          <p style={{ paddingTop: 14 }}>
            Ungurmuiža atrodas 15 km no Cēsīm, 80 km no Rīgas
          </p>
          <h2>Rekvizīti</h2>
          <p>
            SIA <em>THE LUMIERE BROTHERS</em>
          </p>
          <p>PVN reģistrācijas Nr. LV44103109096</p>
          <p>
            Juridiskā adress: <em>Billes</em>, Raiskuma pag., Cēsu nov., LV-4146
          </p>
          <p>Banka: AS SEB banka</p>
          <p>Konta Nr.: LV68UNLA0050024518123</p>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17214.23769952172!2d25.066642434119554!3d57.36279496343578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46ebfd1e44bd743b%3A0xde6386b152717d26!2sUngurmui%C5%BEa%2C%20Raiskuma%20pagasts%2C%20C%C4%93su%20novads%2C%20LV-4146!5e0!3m2!1slv!2slv!4v1727592986321!5m2!1slv!2slv"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
