import logo from "../assets/Images/greenLogo.png";
import { Link } from "react-router-dom";
import "../assets/Css/Header.css";

export default function Header() {
  return (
    <div className="header">
      <img
        src={logo}
        alt="intuitive text with logo"
        height="15px"
        width="200px"
      />
      <div className="headerMenu">
        <Link to="/">Home</Link> <Link to="/services">Services</Link>{" "}
        <Link to="/about">About</Link> < Link to="/testimonials">Reviews</Link> <Link to="/contact">Contact</Link>{" "}
      </div>
    </div>
  );
}
