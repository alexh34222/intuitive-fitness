import Header from "./Header";
import Footer from "./Footer";

import "../assets/Css/Contact.css"

export default function Contact() {
  return (
    <div>
      <Header />
      <div className="contactSectionOne">
        <h1>CONTACT US</h1>
        <a href="mailto:tom@nwintuitivefit.com">tom@nwintuitivefit.com</a>
      </div>
      <Footer />
    </div>
  );
}
