import Header from "../Components/Header";
import "../assets/Css/About.css";

import TJ from "../assets/Images/about/updatedTomJuliaCropped.jpg";

export default function About() {
  return (
    <div className="about">
      <Header />
      <div className="aboutSectionOne">
        <h2>ABOUT INTUITIVE FITNESS</h2>
        <img src={TJ} alt="photo of owners Tom and Julia" />
        <h5>Tom & Julia Studzinski (Owners)</h5>
        <div className="aboutSectionOneText
        ">
            <p> Intuitive Fitness was created because Tom wanted a wider reach to
            help more individuals, and understood that working within a
            traditional gym had its limits. Gyms were too crowded for clients to
            get continued quality service, and clients had to pay gym membership
            fees on top of personal training rates. He wanted to inspire others
            who may not be members of the gym or any fitness club; people who
            wanted a lifestyle change or to gain better movement habits, with no
            exercise history and no prerequisites required in order to see him.
            At Intuitive Fitness there are no membership fees, and there is
            total privacy within our private studio space or any in-home
            environment. There is no equipment necessary, and most importantly
            anyone can access affordable, professional, customized personal
            training.</p>
        </div>
      </div>
    </div>
  );
}
