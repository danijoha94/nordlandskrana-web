import NkIcon from "../NkIcon/NkIcon";
import styles from "./MobileSearchBar.module.css";

export default function MobileSearchBar() {
  return (
    <div className={styles.MobileSearchBar}>
      <button className={styles.searchButton}>
        <NkIcon type="i-search" />
      </button>
    </div>
  );
}
