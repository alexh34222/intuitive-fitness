import Header from "./Header";
import Footer from "./Footer";

import Instagram from "../assets/Images/contact/icons8-instagram-250.png";

import "../assets/Css/Contact.css";

export default function Contact() {
  return (
    <div>
      <Header />
      <div className="contactSectionOne">
        <h1>CONTACT US</h1>

        <h3>Email/Phone</h3>
        <a href="mailto:tom@nwintuitivefit.com">
          Email: tom@nwintuitivefit.com
        </a>
        <a href="tel:+12062957018">Call: (206)295-7018</a>
      </div>
      <div className="contactSectionTwo">
        <h3>Social Links</h3>
        <div className="socialLinks">
          <a
            href="https://www.instagram.com/intuitive.fitness.seattle"
            target="_blank"
          >
            {" "}
            <img src={Instagram} alt="instagram icon" />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
