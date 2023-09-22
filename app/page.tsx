import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
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
      <div className={styles.imageGallery}>
        <div className={styles.imageContainerOne}>
          <Image
            src="/images/beltekran.webp"
            alt="Company logo"
            layout="fill"
            className={styles.image}
          />
        </div>
        <div className={styles.imageContainerTwo}>
          <Image
            src="/images/mobilkran-2.jpeg"
            alt="Company logo"
            layout="fill"
            className={styles.image}
          />
        </div>
        <div className={styles.imageContainerThree}>
          <Image
            src="/images/trekkvogn-croped.jpg"
            alt="Company logo"
            layout="fill"
            className={styles.image}
          />
        </div>
      </div>
    </main>
  );
}
