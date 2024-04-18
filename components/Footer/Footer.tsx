import Image from "next/image";
import NkIcon from "../NkIcon/NkIcon";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.companyInfo}>
        <Image
          src="/images/logo.png"
          alt="Company logo"
          width={100}
          height={74}
        />
        <div className={styles.phoneInfo}>
          <a href="tel:004775528688">Tlf: +47 755 28 688</a>
          <a href="tel:004795028550">Mob: +47 950 28 550</a>
        </div>
        <div className={styles.emailInfo}>
          <a href="mailto:kenneth@nordlandskrana.no">
            Epost: kenneth@nordlandskrana.no
          </a>
          <a href="mailto:faktura@nordlandskrana.no">
            Faktura: faktura@nordlandskrana.no
          </a>
        </div>
        <div className={styles.adressInfo}>
          <span>Adresse</span>
          <span>Notveien 11a 8013 Bodø</span>
        </div>
      </div>
      <div className={styles.icons}>
        <a href="mailto:kenneth@nordlandskrana.no">
          <NkIcon type={"i-email"} />
        </a>
        <a href="https://www.facebook.com/nordlandskrana" target="_blank">
          <NkIcon type={"i-facebook"} />
        </a>
      </div>
      <div className={styles.devider}></div>
      <div className={styles.rightsReserved}>
        © 2023 JOHANSEN WEB All rights reserved.
      </div>
    </footer>
  );
}
