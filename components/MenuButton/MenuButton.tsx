import NkIcon from "../NkIcon/NkIcon";
import styles from "./MenuButton.module.css";

type MenuButtonType = "hamburger" | "close";

interface Props {
  type: MenuButtonType;
  onClick: () => void;
}

export default function MenuButton(props: Props) {
  const { type, onClick } = props;

  if (type === "hamburger") {
    return (
      <button className={styles.menuButton} onClick={onClick}>
        <NkIcon type="i-menu" />
      </button>
    );
  }

  if (type === "close") {
    return (
      <button className={styles.menuButton} onClick={onClick}>
        <NkIcon type="i-close" />
      </button>
    );
  }

  return <p>NO BUTTON TYPE</p>;
}
