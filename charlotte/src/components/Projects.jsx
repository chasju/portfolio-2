import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import styles from "@/styles/Home.module.css";

const options = {
  perPage: 2,
  arrows: true,
  pagination: false,
};

const slides = [
  { image: "findNo.png", text: "Auction website", id: "1", link: "https://auction-chasju.netlify.app/" },
  { image: "jupiter.png", text: "Jupiter website", id: "2", link: "https://allthingsjupiter.netlify.app/" },
  { image: "squareEyes.png", text: "Fictional streaming website", id: "3", link: "https://square-eyes-chasju.netlify.app/" },
];

export default function Projects() {
  return (
    <>
      <h2 className={styles.projects}>Projects</h2>
      <a className={styles.icons} href="https://github.com/chasju?tab=repositories">
        <i className="fa-brands fa-github"></i>
      </a>
      <div className={styles.wrapper}>
        <div className={styles.splide}>
          <Splide options={options}>
            {slides.map((slide) => (
              <SplideSlide key={slide.id}>
                <a href={slide.link} className={styles.link}>
                  <div className={styles.slide}>
                    <div className={styles.card}>
                      <img src={slide.image} className={styles.slideImage} />
                      <span className={styles.padding}>{slide.text}</span>
                    </div>
                  </div>
                </a>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </>
  );
}
