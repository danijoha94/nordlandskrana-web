import ServiceComponent, {
  Service,
} from "@/components/ServiceComponent/ServiceComponent";
import Image from "next/image";
import Link from "next/link";
import { title } from "process";
import styles from "./Trailer.module.css";

export default function Trailer() {
  const services: Service[] = [
    {
      title: "SCANIA S730",
      subtitle: "TREKKVOGN",
      imgUrl: "/images/trailer-1.webp",
      altText: "Trekkvogn",
    },
    {
      title: "SCANIA R620",
      subtitle: "TEKKVOGN",
      imgUrl: "/images/trailer-2.jpeg",
      altText: "TREKKVOGN",
    },
  ];
  return (
    <main>
      <div className={styles.pageHeader}>
        <Link className={styles.servicesLink} href="/Tjenester">
          Tjenester
        </Link>
        <h2 className={styles.headerText}>Trekkvogner</h2>
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
