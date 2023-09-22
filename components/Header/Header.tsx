"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DesktopSearchBar from "../DesktopSearchBar/DesktopSearchBar";
import MenuButton from "../MenuButton/MenuButton";
import MenuModal from "../MenuModal/MenuModal";
import styles from "./Header.module.css";
import { usePathname } from "next/navigation";

export default function Header() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const pathname = usePathname();

  const activePath = {
    services: pathname === "/Tjenester",
    about: pathname === "/Om-oss",
    contact: pathname === "/Kontakt",
  };

  const toggleModal = () => {
    setTimeout(() => {
      setShowModal(!showModal);
    }, 100);
  };

  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Company logo"
            width={150}
            height={110}
          />
        </Link>
        <div className={styles.desktopMenu}>
          <nav className={styles.navigation}>
            <Link
              className={styles.navigationLink}
              data-active={activePath.services}
              href="/Tjenester"
            >
              Tjenester
            </Link>
            <Link
              className={styles.navigationLink}
              href="/Om-oss"
              data-active={activePath.about}
            >
              Om oss
            </Link>
            <Link
              className={styles.navigationLink}
              href="/Kontakt"
              data-active={activePath.contact}
            >
              Kontakt
            </Link>
          </nav>
        </div>
        <div className={styles.mobileMenu}>
          <MenuButton type="hamburger" onClick={toggleModal} />
        </div>
      </header>

      {showModal && <MenuModal handleClose={toggleModal} />}
    </>
  );
}
