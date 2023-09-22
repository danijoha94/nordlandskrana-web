import ServiceComponent, {
  Service,
} from "@/components/ServiceComponent/ServiceComponent";
import Image from "next/image";
import Link from "next/link";
import styles from "./Truckcrane.module.css";

export default function Truckcrane() {
  const services: Service[] = [
    {
      title: "PALFINGER PK 85002 PERFORMANCE",
      subtitle: "LASTEBILKRAN",
      imgUrl: "/images/lastebilkran.webp",
      altText: "Lastebilkran",
      tableUrl: "/tabels/PALFINGER-PK-85002-PERFORMANCE.pdf",
    },
  ];
  return (
    <main>
      <div className={styles.pageHeader}>
        <Link className={styles.servicesLink} href="/tjenester">
          Tjenester
        </Link>
        <h2 className={styles.headerText}>Lastebilkran</h2>
      </div>
      {services.map((service) => {
        return (
          <div
            className={styles.mobileCraneWrapper}
            key={`${service.title}-${service.subtitle}`}
          >
            <ServiceComponent service={service} />
          </div>
        );
      })}
    </main>
  );
}
