import styles from "@/styles/Home.module.css";

export default function Contact() {
  return (
    <>
      <h2 className={styles.projects}>Contact</h2>
      <div className={styles.iconContainer}>
        <a className={styles.icons} href="https://www.linkedin.com/in/charlottesjusdal/">
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a className={styles.icons} href="mailto:charlotte.sjusdal@hotmail.com">
          <i class="fa-solid fa-envelope"></i>
        </a>
      </div>
    </>
  );
}
