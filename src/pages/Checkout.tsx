import React from "react";
import CheckoutForm from "../components/checkout/CheckoutForm";
import Footer from "../components/sharedComponents/Footer";

function Checkout() {
  return (
    <div>
      <div>
        <CheckoutForm />
      </div>
      <Footer />
    </div>
  );
}

export default Checkout;
