import styles from "./ContactForm.module.css";

export default function ContactForm() {
  return (
    <div className={styles.contactForm}>
      <label className={styles.label}>
        Fornavn:
        <input className={styles.input} type="text"></input>
      </label>
      <label className={styles.label}>
        Etternavn:
        <input className={styles.input} type="text"></input>
      </label>
      <label className={styles.label}>
        Telefon:
        <input className={styles.input} type="text"></input>
      </label>
      <label className={styles.label}>
        Epost:
        <input className={styles.input} type="text"></input>
      </label>
      <label className={styles.label}>
        Beskjed:
        <textarea className={styles.textarea}></textarea>
      </label>
      <label className={styles.label}>
        Send fil:
        <input className={styles.fileInpunt} type="file"></input>
      </label>
      <div className={styles.buttonContainer}>
        <button className={styles.sendButton}>Send</button>
      </div>
    </div>
  );
}
