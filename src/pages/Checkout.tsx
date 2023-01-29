import React from "react";
import CheckoutForm from "../components/checkout/CheckoutForm";
import Footer from "../components/sharedComponents/Footer";
import Summary from "../components/checkout/summary";

function Checkout() {
  return (
    <div>
      <div className="flex-c-center">
        <CheckoutForm />
        <Summary />
      </div>

      <Footer />
    </div>
  );
}

export default Checkout;
