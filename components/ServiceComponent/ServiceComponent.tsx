import Image from "next/image";
import styles from "./ServiceComponent.module.css";

export interface Service {
  title: string;
  subtitle: string;
  imgUrl: string;
  altText: string;
  readmoreUrl?: string;
  tableUrl?: string;
}

interface Props {
  service: Service;
}

export default function ServiceComponent(props: Props) {
  const { service } = props;

  return (
    <div className={styles.content}>
      <div className={styles.imageContainer}>
        <Image
          src={service.imgUrl}
          layout="fill"
          alt={service.altText}
          className={styles.image}
        ></Image>
      </div>
      <div className={styles.info}>
        <h2 className={styles.mainTitle}>{service.title}</h2>
        <h3 className={styles.subTitle}>{service.subtitle}</h3>
        {service.readmoreUrl != null && (
          <a className={styles.linkButton} href={service.readmoreUrl}>
            Les mer her
          </a>
        )}

        {service.tableUrl != null && (
          <a
            className={styles.linkButton}
            href={service.tableUrl}
            target="_blank"
          >
            Se tabell
          </a>
        )}
      </div>
    </div>
  );
}
