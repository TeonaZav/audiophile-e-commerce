import React from "react";
import Header from "../components/sharedComponents/Header";
import CategoryItems from "../components/sharedComponents/CategoryItems";
import About from "../components/About";
import Footer from "../components/sharedComponents/Footer";
function Earphones(props) {
  return (
    <div>
      <Header />
      <CategoryItems />
      <About />
      <Footer />
    </div>
  );
}

export default Earphones;
