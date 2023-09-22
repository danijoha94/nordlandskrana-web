import Image from "next/image";
import LinkListButton from "../LinkListButton/LinkListButton";
import MenuButton from "../MenuButton/MenuButton";
import NkIcon from "../NkIcon/NkIcon";
import MobileSearchBar from "../MobileSearchBar/MobileSearchBar";
import styles from "./MenuModal.module.css";

interface Props {
  handleClose: () => void;
}

export default function MenuModal(props: Props) {
  const { handleClose } = props;

  const linkList = [
    {
      label: "Tjenester",
      url: "/Tjenester",
    },
    {
      label: "Om oss",
      url: "/Om-oss",
    },
    {
      label: "Kontakt",
      url: "/Kontakt",
    },
  ];

  return (
    <div className={styles.modal}>
      <header className={styles.header}>
        <a>
          <Image
            src="/images/logo.png"
            alt="Company logo"
            width={150}
            height={110}
          />
        </a>
        <MenuButton type="close" onClick={handleClose} />
      </header>
      <main className={styles.main}>
        <ul className={styles.list}>
          {linkList.map((link) => {
            return (
              <li className={styles.lsitItem} key={`${link.label}-${link.url}`}>
                <LinkListButton
                  label={link.label}
                  url={link.url}
                  handleClick={handleClose}
                />
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}
