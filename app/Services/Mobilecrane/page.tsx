import ServiceComponent, {
  Service,
} from "@/components/ServiceComponent/ServiceComponent";
import Image from "next/image";
import Link from "next/link";
import { title } from "process";
import styles from "./Mobilecrane.module.css";

export default function Mobilecrane() {
  const services: Service[] = [
    {
      title: "TADANO FAUN ATF 220G-5",
      subtitle: "MOBILKRAN",
      imgUrl: "/images/mobilkran-1.jpeg",
      altText: "Mobilkran",
      tableUrl: "/tabels/TADANO-FAUN-ATF-220G-5.pdf",
    },
    {
      title: "TADANO ATF 60G-3",
      subtitle: "MOBILKRAN",
      imgUrl: "/images/mobilkran-2.jpeg",
      altText: "Mobilkran",
      tableUrl: "/tabels/TADANO-ATF-60G-3.pdf",
    },
    {
      title: "TADANO FAUN ATF 110G-5",
      subtitle: "MOBILKRAN",
      imgUrl: "/images/mobilkran-3.webp",
      altText: "Mobilkran",
      tableUrl: "/tabels/TADANO-FAUN-ATF-110G-5.pdf",
    },
    {
      title: "TADANO FAUN ATF 130G-5",
      subtitle: "MOBILKRAN",
      imgUrl: "/images/mobilkran-4.webp",
      altText: "Mobilkran",
      tableUrl: "/tabels/TADANO-FAUN-ATF-130G-5.pdf",
    },
  ];
  return (
    <main>
      <div className={styles.pageHeader}>
        <Link className={styles.servicesLink} href="/Tjenester">
          Tjenester
        </Link>
        <h2 className={styles.headerText}>Mobilkraner</h2>
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
