import React from "react";
import Header from "../components/sharedComponents/Header";
import Hero from "../components/Hero";
import About from "../components/sharedComponents/About";
import Footer from "../components/sharedComponents/Footer";
function Home(props) {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Footer />
    </div>
  );
}

export default Home;
