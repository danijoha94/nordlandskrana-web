import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.imageGallery}>
        <div className={styles.imageContainerOne}>
          <Image
            src="/images/logo.png"
            alt="Company logo"
            width={150}
            height={110}
          />
        </div>
      </div>
      <h1 className={styles.header}>Når noe skal løftes</h1>

      <p className={styles.description}>
        Nordlandskrana tilbyr en rekke tjenester gjennom vår utvidede
        maskinpark, som inkluderer blant annet mobilkraner, lastebilkraner og
        trekkvogner. Våre hovedtjenester er utleie av mobilkraner, alt innen
        løft og transport. Vi har høy kompentanse både blant våre ansatte og på
        utstyret vi bruker i arbeidet, og vi leverer alltid den tjenesten kunden
        ber om. Vi opererer i tillegg ut fra en gjennomgående liste av
        protokoller, rutiner og godkjenninger for å sikre at den tjenesten vi
        utfører ikke bare blir utført, men også utført på en sikker, kontrollert
        og riktig måte.
      </p>
    </main>
  );
}
