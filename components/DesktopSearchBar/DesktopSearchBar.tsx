import { useState } from "react";
import NkIcon from "../NkIcon/NkIcon";
import styles from "./DesktopSearchBar.module.css";

export default function DesktopSearchBar() {
  return (
    <div className={styles.DesktopSearchBar}>
      <input className={styles.searchInput} placeholder="Søk..." />
      <button
        className={styles.searchButton}
        onClick={() => {
          alert("search");
        }}
      >
        <NkIcon type="i-search" />
      </button>
    </div>
  );
}
