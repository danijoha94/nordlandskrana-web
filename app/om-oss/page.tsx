import Header from "@/components/Header/Header";
import NkIcon from "@/components/NkIcon/NkIcon";
import Image from "next/image";
import styles from "./about.module.css";

export default function About() {
  const articles = [
    {
      img: "/images/shaking-hands.jpeg",
      altText: "To personer i enighet",
      title: "Godkjenninger",
      text: [
        "Byggenæringen Landsforening (BNL) har med utgangspunkt i prosjektet 'Seriøsitet i byggenæringen', etablert et felles leverandørregister for bygg- og anleggsnæringen, kalt StartBANK. Utviklingen av leverandørregisteret har skjedd i tett samarbeid med offentlige myndigheter. Formålet med leverandørregisteret er å bidra til at aktørene i Bygge- og anleggsnæringen kan konkurrere på like vilkår.",
        "I tillegg vil man gjennom ordningen oppnå en effektiv og ressurssparende informasjonsdeling av felles opplysninger. Leverandører blir vurdert på grunnlag av på forhånd fastlagte objektive godkjenningskriterier, og dette gjør det enklere for næringens aktører å sikre at kontrakter inngås med seriøse bedrifter.",
      ],
    },
    {
      img: "/images/nordlandshallen.webp",
      altText: "Nordlandshallen bygges",
      title: "Historien",
      text: [
        "Selskapet ble etablert som I/S i 1980. I 1986 ble det omdannet til dagens A/S.",
        "Nordlandskrana ble drevet av Jan Karstein Pedersen fra etableringen og ut 2012, da trakk han seg tilbake og ble pensjonert. Kenneth Pedersen tok over som daglig leder i 2013 som er sønnen av Jan og har jobbet i firmaet siden 1990.",
        "Vi utfører det meste innen løft og transport. Selskapet har i dag 10 ansatte og holder til i egne lokaler i Notveien 11a i Bodø. Nordlandskrana AS drev tidligere med montering av betongelementbygg, dette avviklet vi i 2014.",
        " I dag har vi 5 mobilkraner fra 60 til 220 tonns løftekapasitet, en beltekran LR1250 med en løftekapasitet på 250 tonn. Denne har vi 38 meter hoved bom og 47 meter luffing til. To trekkvogner og an lastebilkran med en PK85t/m.",
        " Vi setter HMS og sikkerheten høyt og utfører oppdrag i henhold til forskriftene.",
      ],
    },
  ];
  const employees = [
    {
      name: "Kenneth Pedersen",
      role: "Daglig leder",
      phone: "+4795028550",
      email: "kenneth@nordlandskrana.no",
    },
    {
      name: "Jan Karstein Pedersen",
      role: "Administrasjon",
      phone: "+47 906 21 579",
    },
    {
      name: "Jan Arild Brun",
      role: "Kranfører Tadano ATF 220G-5",
      phone: "+47 917 36 879",
    },
    {
      name: "Jan Falck",
      role: "Kranfører Tadano ATF 130G-5",
      phone: "+47 913 88 063",
    },
    {
      name: "Lee Johnson",
      role: "Kranfører Tadano ATF 110G-5",
      phone: "+47 928 28 601",
    },
    {
      name: "Steffen Ågnes",
      role: "Kranfører/Fagarbeider",
      phone: "+47 951 40 048",
    },
    {
      name: "Kai-Jakob Kleivvik",
      role: "Lærling",
      phone: "+47 905 25 763",
    },
    {
      name: "Vegard Laksfors",
      role: "Sjåfør/Kranfører",
      phone: "+47 468 54 431",
    },
  ];
  return (
    <>
      <main className={styles.main}>
        {articles.map((article) => {
          return (
            <article
              className={styles.article}
              key={`${article.altText}-${article.title}`}
            >
              <Image
                src={article.img}
                layout="fill"
                alt={article.altText}
                className={styles.image}
              />
              <div className={styles.articleContent}>
                <h2 className={styles.articleTitle}>{article.title}</h2>
                {article.text.map((paragraph) => {
                  return (
                    <>
                      <p className={styles.articleParagraph}>{paragraph}</p>
                      <br />
                    </>
                  );
                })}
              </div>
            </article>
          );
        })}
        <div className={styles.employeeContainer}>
          <h2 className={styles.employeesTitle}>Ansatte</h2>
          <div className={styles.employees}>
            {employees.map((employee) => {
              return (
                <div key={employee.phone} className={styles.employee}>
                  <ul className={styles.employeeList}>
                    <li className={styles.employeeRow}>
                      <NkIcon type="i-user" />
                      <p>{employee.name}</p>
                    </li>
                    <li className={styles.employeeRow}>
                      <NkIcon type="i-tag" />
                      <p>{employee.role}</p>
                    </li>
                    <li className={styles.employeeRow}>
                      <NkIcon type="i-phone" />
                      <p>{employee.phone}</p>
                    </li>
                    {employee.email != null && (
                      <li className={styles.employeeRow}>
                        <NkIcon type="i-email" />
                        <p>{employee.email}</p>
                      </li>
                    )}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
