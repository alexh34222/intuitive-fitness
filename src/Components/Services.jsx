import Header from "./Header";
import Footer from "./Footer";
import Running from "../assets/Images/running.webp";

import "../assets/Css/Services.css";

export default function Services() {
  return (
    <div>
      <Header />
      <div className="servicesPage">
        <div className="headerImageServicesPage">
          <h2>OUR SERVICES</h2>
          <img src={Running} alt="person running"></img>
        </div>
        <div className="servicesText">
          <div className="servicesMessage">
            {" "}
            <p>
              Fitness encompasses a diverse range of activities, it is our duty
              to educate and provide options to our clients through our
              services. Offering countless ways to stay active, happy and
              healthy! <br /> <br />
              We always start new clients with a free consultation to learn more
              about the individual(s) to take the best course of action while
              creating an exercise program. Whether that is personal training,
              exercise programming or habit counseling/coaching <br /> (these
              services can often be combined){" "}
            </p>
          </div>
          <div className="servicesLinks">
            <h2>
              To view all of our services and to book a session{" "}
              <a
                href="https://squareup.com/appointments/book/3h8i9uhnusje5i/1Z9SWQF9M4V90/start"
                target="_blank"
              >
                CLICK HERE
              </a>
            </h2>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
