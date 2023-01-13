import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";
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