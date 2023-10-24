import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import benchPress from "../assets/Images/benchPressCropped.jpg";
import trainer from "../assets/Images/male-trainer.jpg";
import virtualTrainer from "../assets/Images/online-personal-trainer.jpg";
import laptop from "../assets/Images/laptop-illustration.jpg";
import Header from "./Header";
import Footer from "./Footer";

// images imports
import airConditioning from "../assets/Images/home/air.webp";
import bands from "../assets/Images/home/bands.webp";
import banner from "../assets/Images/home/banner.webp";
import doors from "../assets/Images/home/doors.webp";
import exterior from "../assets/Images/home/exterior.webp";
import frontDoor from "../assets/Images/home/frontdoor.webp";
import studio from "../assets/Images/home/studio.webp";
import water from "../assets/Images/home/water.webp";
import weights from "../assets/Images/home/weights.webp";
import weightTree from "../assets/Images/home/weighttree.webp";

import "../assets/Css/Home.css";

export default function Home() {
  const carouselImages = [
    {
      src: exterior,
      alt: "image of gym exterior",
      description:
        "The Intuitive Fitness training studio has over 300sqft of workout space! In a traditional gym you often have less space due to the number of members using the same area/equipment needed to complete your workout. Here you won’t have to fight for elbow space. All the equipment is yours to use, uninterrupted for up to 55 minutes!",
    },
    {
      src: frontDoor,
      alt: "image of the front door of the gym",
      description:
        "We are in the process of making improvements to our studio. However, we are quite far along and have great workout space available!",
    },
    {
      src: banner,
      alt: "image of the intuitive fitness logo on a large banner",
      description:
        "The Intuitive Fitness banner hanging in my training studio displays my logo and exhibits my gratitude to be able share this space with you!",
    },
    {
      src: doors,
      alt: "image of the gyms front doors",
      description:
        "These outswing French doors showcase the natural sunlight + heat in the summer and create a larger feeling within the studio when open.",
    },
    {
      src: bands,
      alt: "image of workout bands",
      description:
        "The studio has a collection of weighted bands to assist in accomplishing many different types of workouts.",
    },
    {
      src: weightTree,
      alt: "image of weights stacked",
      description:
        "We have an assortment of equipment to increase strength as individual progress continues.",
    },
    {
      src: weights,
      alt: "image of weights",
      description:
        "Variously sized dumbbells and kettlebells are important to dialing in the correct weight per personal workout. ",
    },
    {
      src: water,
      alt: "image of the water fountain",
      description:
        "The new touchless automatic water bottle filler has been a critical addition!",
    },
    {
      src: airConditioning,
      alt: "photo of the air conditioner/heater",
      description:
        "The newly installed air conditioner provides a cooler climate in the hot months but also acts as a heater in the winter.",
    },
    {
      src: studio,
      alt: "image of the studio",
      description:
        "This custom designed personal training studio is coming along, with more improvements to follow!",
    },
  ];

  return (
    <div className="Home">
      <Header />
      <div className="homeSectionOne">
        <div className="imageOverlay">
          <img
            src={benchPress}
            alt="stock image of a bench-press bar and weights"
          />
          <div className="overlayText">
            <p>
              Exercise is intuitive because it taps into our innate human drive
              to move and explore our physical capabilities
            </p>
          </div>
        </div>
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
      <div className="imagesContainer">
        {" "}
        <div className="homeImages">
          <Carousel
            showArrows={true}
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
          >
            {carouselImages.map((image, index) => (
              <div key={index}>
                <img src={image.src} alt={image.alt} />
                <p className="legend">{image.description}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      <Footer />
    </div>
  );
}
