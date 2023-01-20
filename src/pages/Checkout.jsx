import React from "react";
import CheckoutForm from "../components/CheckoutForm";
import Header from "../components/sharedComponents/Header";
import Footer from "../components/sharedComponents/Footer";

function Checkout(props) {
  return (
    <div>
      <Header />
      <CheckoutForm />
      <Footer />
    </div>
  );
}

export default Checkout;
