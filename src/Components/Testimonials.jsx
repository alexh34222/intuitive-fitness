import Header from "./Header";
import Footer from "./Footer";
import "../assets/Css/Testimonials.css";

export default function Testimonials() {
  return (
    <div>
      <Header />
      <div className="clientTestimonialsPage">
        <div className="testimonialsMainText">
          <p>
            From the early stages of life, we naturally engage in activities
            like crawling, walking, and running, as well as playful movements.
            Throughout history, our ancestors relied on physical activity for
            survival, such as hunting, gathering, and farming. <br /> <br />
            In modern times, exercise remains instinctive as it releases
            endorphins, the feel-good hormones, contributing to improved mood
            and reduced stress. Whether it's dancing, playing sports, or simply
            taking a walk, our bodies are designed to be in motion. <br />{" "}
            <br />
            The beauty of exercise is that it allows us to listen to our bodies,
            choosing activities that bring joy and fulfillment, making it more
            likely to become a sustainable and enjoyable part of our lives.{" "}
            <br />
            <br />
            Here are some clients who make Intuitive the empowering place it is.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
