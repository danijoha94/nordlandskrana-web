import Link from "next/link";
import NkIcon from "../NkIcon/NkIcon";
import styles from "./LinkListButton.module.css";

interface Props {
  label: string;
  url: string;
  handleClick?: () => void;
}

export default function LinkListButton(props: Props) {
  const { label, url, handleClick } = props;
  return (
    <Link href={url} className={styles.LinkListButton} onClick={handleClick}>
      {label}
      <NkIcon type="i-arrow-right" />
    </Link>
  );
}
