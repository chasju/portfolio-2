import styles from "@/styles/Card.module.css";

const Card = ({ slide }) => {
  return (
    <>
      <section className={styles.card}>
        <div className={styles.imgContainer}>
          <a href={slide.link}>
            <img src={slide.image} alt={slide.text} className={styles.cardImg} />
          </a>
        </div>
        <h1>{slide.text}</h1>
        <p>{slide.description}</p>
        <div className={styles.iconContainer}>
          <a href={slide.link} className={styles.icon}>
            <i className="fa-solid fa-square-arrow-up-right"></i>
          </a>
          <a href={slide.gitHub} className={styles.icon}>
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </section>
    </>
  );
};

export default Card;
