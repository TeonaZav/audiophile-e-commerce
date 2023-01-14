import React from "react";
import Header from "../components/sharedComponents/Header";
import CategoryItems from "../components/sharedComponents/CategoryItems";
import HeadphonesList from "../components/HeadphonesList";
import About from "../components/About";
import Footer from "../components/sharedComponents/Footer";
function Headphones(props) {
  return (
    <div>
      <Header />
      <HeadphonesList />
      <CategoryItems />
      <About />
      <Footer />
    </div>
  );
}

export default Headphones;
