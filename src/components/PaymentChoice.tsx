import React, { useState } from "react";
import styled from "styled-components";
function PaymentChoice() {
  return (
    <Wrapper>
      <h4>payment details</h4>
      <div className="payment-ct">
        <div className="radio-field">
          <input
            type="radio"
            id="e-money"
            name="payment-method"
            value="e-money"
            style={{ width: "2rem", height: "2rem" }}
          />
          <label htmlFor="e-money">e-Money</label>
        </div>

        <div className="radio-field">
          <input
            type="radio"
            id="cash"
            name="payment-method"
            value="cash"
            style={{ width: "2rem", height: "2rem" }}
          />
          <label htmlFor="cash">Cash on Delivery</label>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .payment-ct {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    margin-bottom: 3.2rem;
  }
  .details-container {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    margin-bottom: 3.2rem;
  }
  .radio-field {
    width: 28rem;
    height: 5.6rem;
    background: #ffffff;
    border: 1px solid #cfcfcf;
    border-radius: 0.8rem;
    padding: 1.6rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
  }
  input[type="radio"]#cash,
  input[type="radio"]#e-money {
    accent-color: #d87d4a;
    width: 2rem;
    height: 2rem;
  }

  .radio-field:has(input:focus) {
    border: 1px solid #d87d4a;
  }
  @media (min-width: 48em) {
    .radio-field {
      width: 30.9rem;
    }
  }
  @media (min-width: 90em) {
  }
`;
export default PaymentChoice;
