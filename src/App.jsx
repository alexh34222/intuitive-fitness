import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Testimonials from "./Components/Testimonials";
import ScrollToTop from "./Components/Scroll";

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ScrollToTop /> <Home />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <ScrollToTop />
              <About />{" "}
            </>
          }
        />
        <Route
          path="/services"
          element={
            <>
              <ScrollToTop />
              <Services />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <ScrollToTop />
              <Contact />
            </>
          }
        />
        <Route
          path="/testimonials"
          element={
            <>
              <ScrollToTop />
              <Testimonials />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
