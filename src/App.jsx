import React from "react";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import Coaching from "./components/Coaching";
import Blog from "./components/Blog";
import FreeGuide from "./components/FreeGuide";
import BookNow from "./components/BookNow";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Coaching />
      <Reviews />
      <Blog />
      <FreeGuide />
      <BookNow />
      <Newsletter />
      <Footer />
    </>
  );
};

export default App;
