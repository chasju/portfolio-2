import styles from "@/styles/Home.module.css";

export default function Me() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.rectangle}></div>
        <img src="charlotte.jpeg" alt="" className={styles.image} />
        <div className={styles.textContainer}>
          <p className={styles.paragraph}>I am</p>
          <h1 className={styles.description}>A front end developer with a passion for design and user experience.</h1>
        </div>
      </div>
    </>
  );
}
