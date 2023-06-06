import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import styles from "@/styles/Home.module.css";
import cardStyles from "@/styles/Card.module.css";
import Card from "./Card";

const options = {
  perPage: 2,
  arrows: true,
  pagination: false,
};

const slides = [
  { image: "holidaze.png", text: "Book A Stay Website", id: "1", link: "https://holidaze-chasju.netlify.app/", gitHub: "https://github.com/chasju/holidaze", description: "A book stay at a venue website, where people can register an account, create their own venues and book a stay at other people's venues." },
  { image: "storeit.png", text: "React Store website", id: "2", link: "https://storeit-chasju.netlify.app", gitHub: "https://github.com/chasju/react-store", description: "An online store website, where users can add products to their cart and finally checkout their cart." },
  { image: "auction.png", text: "Auction Website", id: "3", link: "https://auction-chasju.netlify.app/", gitHub: "https://github.com/chasju/auction", description: "An auction website, where people can register an account, create their own listings and bid on other people's listings." },
];

export default function Projects() {
  return (
    <>
      <h2 className={styles.projects}>Projects</h2>
      <a className={styles.icons} href="https://github.com/chasju?tab=repositories">
        <i className="fa-brands fa-github"></i>
      </a>
      <p className={cardStyles.scroll}>Scrooooooooooooll to see more projects</p>
      <div className={cardStyles.container}>
        {slides.map((slide) => {
          return <Card key={slide.id} slide={slide} />;
        })}
      </div>
    </>
  );
}
