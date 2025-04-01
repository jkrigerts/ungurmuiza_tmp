import Link from "next/link";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <h3>Darba laiks</h3>
        <p
          style={{
            fontWeight: 700,
            paddingTop: 0,
            paddingBottom: 7,
            color: "var(--black)",
          }}
        >
          Muzeja darba laiks
        </p>
        <p>P. - C. SLĒGTS</p>
        <p>Pk. - Sv. 10.00 - 18.00</p>
        <p
          style={{
            fontWeight: 700,
            paddingTop: 14,
            paddingBottom: 7,
            color: "var(--black)",
          }}
        >
          Restorāna darba laiks
        </p>
        <p>Tehnisku iemeslu dēļ īslaicīgi slēgts</p>
        <p style={{ paddingTop: 14 }}>
          Ja vēlaties mūs apciemot citā laikā, lūdzu, iepriekš zvanīt un jautāt
          par iespējām
        </p>
      </div>
      <div>
        <h3>Adrese</h3>
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
      </div>
      <div>
        <h3>E-pasts</h3>
        <a href="mailto:info@ungurmuiza.lv">info@ungurmuiza.lv</a>
        <h3>Telefons</h3>
        <a href="tel:+37122007332">+371 22007332</a>
      </div>
    </footer>
  );
}
