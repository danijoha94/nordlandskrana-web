import Image from "next/image";
import Link from "next/link";
import styles from "./Services.module.css";

export default function Services() {
  const services = [
    {
      img: "/images/mobilkran.webp",
      title: "Mobilkran",
      intro: "Skal du opperere i høyden?",
      readMoreUrl: "/tjenester/mobilkraner",
    },
    {
      img: "/images/trekkvogn-croped.jpg",
      title: "Trekkvogn",
      intro: "Frakter det meste, til de fleste steder",
      readMoreUrl: "/tjenester/trekkvogn",
    },
    {
      img: "/images/lastebilkran-croped.jpg",
      title: "Lastebilkran",
      intro: "Løft og transport, lett tilgjengelig",
      readMoreUrl: "/tjenester/lastebilkran",
    },
  ];
  return (
    <main className={styles.main}>
      {services.map((service) => {
        return (
          <article key={service.title} className={styles.article}>
            <div className={styles.imageContainer}>
              <Image
                src={service.img}
                layout="fill"
                alt={service.title}
                className={styles.image}
              ></Image>
            </div>
            <div className={styles.articleContent}>
              <h2 className={styles.articleTitle}>{service.title}</h2>
              <p className={styles.articleIntro}>{service.intro}</p>
              <button className={styles.articleReadMoreButton}>
                <Link href={service.readMoreUrl}>Les mer</Link>
              </button>
            </div>
          </article>
        );
      })}
    </main>
  );
}
