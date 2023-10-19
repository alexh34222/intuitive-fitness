import benchPress from "../assets/Images/benchPressCropped.jpg";
import trainer from "../assets/Images/male-trainer.jpg";
import virtualTrainer from "../assets/Images/online-personal-trainer.jpg";
import laptop from "../assets/Images/laptop-illustration.jpg";
import Header from "./Header";
import Footer from "./Footer";

import "../assets/Css/Home.css";

export default function Home() {
  return (
    <div className="Home">
      <Header />
      <div className="homeSectionOne">
        <img
          src={benchPress}
          alt="stock image of a
        bench-press bar and weights"
        />
      </div>
      <div className="homeSectionTwo">
        <div className="containerOurServicesHome">
          <h3>Our Services</h3>
          <img
            src={trainer}
            alt="illustration of male trainer with male client on exercise bike"
          />
        </div>
        <div className="containerAboutUsHome">
          <h3>About Us</h3>
          <img
            src={virtualTrainer}
            alt="illustration of virtual personal training session"
          />
        </div>
        <div className="containerReviewsHome">
          <h3>Client Testimonials</h3>
          <img src={laptop} alt="laptop-illustration" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
