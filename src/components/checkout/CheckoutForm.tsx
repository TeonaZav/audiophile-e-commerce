import React, { useState } from "react";
import styled from "styled-components";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useCartContext } from "../../context/cart_context";
import schema from "./CheckoutSchema";
import Summary from "./summary";
type Email = string & { readonly email: unique symbol };
type FormValues = {
  name: String;
  email: Email;
  phone: String;
  address: String;
  zip: String;
  city: String;
  country: String;
  payment: String;
  emoneyN: String;
  pin: String;
};
function CheckoutForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      payment: "e-money",
    },
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const { openConfirmation } = useCartContext();

  // const { register } = form;
  return (
    <Wrapper>
      <div className="flex-c-center">
        <div className="form-ct">
          <h1>CHECKOUT</h1>
          <form
            onSubmit={handleSubmit((data) => {
              console.log(data);
              openConfirmation();
            })}
            id="checkout-form"
          >
            <h4>Billing details</h4>
            <div className="details-container">
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <input
                  {...register("name", { required: "Name is required" })}
                  placeholder="Alexei Ward"
                  className={errors.name ? "is-invalid" : ""}
                  autoComplete="off"
                />
                <p className="error">{errors.name?.message}</p>
              </div>
              <div className="form-field">
                <label htmlFor="email">Email Address</label>
                <input
                  {...register("email", { required: "Email is required" })}
                  placeholder="alexei@mail.com"
                  className={errors.email ? "is-invalid" : ""}
                  autoComplete="off"
                />
                <p className="error">{errors.email?.message}</p>
              </div>
              <div className="form-field">
                <label htmlFor="phone">Phone Number</label>
                <input
                  {...register("phone", { required: "Phone is required" })}
                  placeholder="+1 202-555-0136"
                  className={errors.phone ? "is-invalid" : ""}
                  autoComplete="off"
                />
                <p className="error">{errors.phone?.message}</p>
              </div>
            </div>
            <h4>shipping info</h4>
            <div className="details-container">
              <div className="form-field address-field">
                <label htmlFor="address">Your Address</label>
                <input
                  {...register("address", {
                    required: { value: true, message: "Address is required" },
                  })}
                  placeholder="1137 Williams Avenue"
                  className={
                    errors.address
                      ? "address-field is-invalid"
                      : "address-field"
                  }
                  autoComplete="off"
                />
                <p className="error">{errors.address?.message}</p>
              </div>
              <div className="form-field">
                <label htmlFor="zip">ZIP Code</label>
                <input
                  {...register("zip", {
                    required: { value: true, message: "Zip code is required" },
                  })}
                  placeholder="10001"
                  className={errors.zip ? "is-invalid" : ""}
                />
                <p className="error">{errors.zip?.message}</p>
              </div>
              <div className="form-field">
                <label htmlFor="city">City</label>
                <input
                  {...register("city", {
                    required: { value: true, message: "City is required" },
                  })}
                  placeholder="New York"
                  className={errors.city ? "is-invalid" : ""}
                  autoComplete="off"
                />

                <p className="error">{errors.city?.message}</p>
              </div>
              <div className="form-field">
                <label htmlFor="country">Country</label>
                <input
                  {...register("country", {
                    required: { value: true, message: "Country is required" },
                  })}
                  placeholder="United States"
                  className={errors.country ? "is-invalid" : ""}
                  autoComplete="off"
                />
                <p className="error">{errors.country?.message}</p>
              </div>
            </div>
            <h4>payment details</h4>
            <div className="payment-ct">
              <p>Payment Method</p>
              <div className="method-ct">
                <div
                  className={
                    errors.payment ? "radio-field is-invalid" : "radio-field"
                  }
                >
                  <input
                    {...register("payment", {
                      required: {
                        value: true,
                        message: "Please check payment method",
                      },
                    })}
                    type="radio"
                    value="e-money"
                    id="e-money"
                    style={{ width: "2rem", height: "2rem" }}
                  />
                  <label htmlFor="e-money">e-Money</label>
                </div>
                <div
                  className={
                    errors.payment ? "radio-field is-invalid" : "radio-field"
                  }
                >
                  <input
                    {...register("payment", {
                      required: {
                        value: true,
                        message: "Please check payment method",
                      },
                    })}
                    type="radio"
                    id="cash"
                    value="cash"
                    style={{ width: "2rem", height: "2rem" }}
                  />
                  <label htmlFor="cash">Cash on Delivery</label>
                  <p className="error">{errors.payment?.message}</p>
                </div>
              </div>
            </div>
            <div className="emoney-ct">
              <div className="form-field">
                <label htmlFor="emoneyN">e-Money Number</label>
                <input
                  {...register("emoneyN", {
                    required: {
                      value: true,
                      message: "e-Money Number is required",
                    },
                  })}
                  placeholder="United States"
                  className={errors.emoneyN ? "is-invalid" : ""}
                  autoComplete="off"
                />
                <p className="error">{errors.emoneyN?.message}</p>
              </div>
              <div className="form-field">
                <label htmlFor="pin">e-Money PIN</label>
                <input
                  {...register("pin", {
                    required: { value: true, message: "Pin is required" },
                  })}
                  placeholder="6891"
                  className={errors.pin ? "is-invalid" : ""}
                  autoComplete="off"
                />
                <p className="error">{errors.pin?.message}</p>
              </div>
            </div>
            <input
              type="submit"
              id="btn-checkout"
              className="btn btn--full btn-checkout"
              value="CONTINUE & PAY"
              form="checkout-form"
            />
          </form>
        </div>
        <div>
          <Summary />
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2.4rem;
  .details-container {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    margin-bottom: 3.2rem;
  }
  .form-ct {
    width: 32.7rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2.4rem 2.4rem 3.2rem 2.3rem;
    background: #ffffff;
    border-radius: 0.8rem;
  }
  h1 {
    font-weight: 700;
    font-size: 2.8rem;
    line-height: 3.8rem;
    letter-spacing: 1px;
    margin-bottom: 3.2rem;
  }
  input {
    width: 28rem;
    height: 5.6rem;
    background: #ffffff;
    border: 1px solid #cfcfcf;
    border-radius: 0.8rem;
    padding: 1.6rem;
    &::placeholder {
      font-weight: 700;
      font-size: 1.4rem;
      line-height: 1.9rem;
      letter-spacing: -0.25px;
      color: var(--pale-black-25);
    }
    &:focus {
      border: 1px solid #d87d4a;
    }
  }
  label {
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 1.6rem;
    letter-spacing: -0.21px;
    color: #000000;
    margin-bottom: 0.2rem;
  }
  .form-field {
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .error {
    position: absolute;
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.6rem;
    letter-spacing: -0.21px;
    color: #cd2c2c;

    top: -0.2rem;
    right: 0;
  }
  .is-invalid {
    border: 0.1rem solid #cd2c2c;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 2rem;
  }
  h4 {
    font-weight: 700;
    font-size: 1.3rem;
    line-height: 2.5rem;
    letter-spacing: 0.93px;
    text-transform: uppercase;
    color: #d87d4a;
    margin-bottom: 1.6rem;
  }
  .btn--full {
    background-color: #d87d4a;
    color: #fff;
    transition: all 0.3s;
    font-size: 1.3rem;
    line-height: 1.8rem;
    height: 4.8rem;
    border-radius: 5px;
  }
  .btn--full:hover,
  .btn--full:active {
    background-color: #fbaf85;
    color: #fff;
  }
  .btn-checkout {
    visibility: hidden;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:active,
  input:-webkit-autofill:focus {
    background-color: #ffffff !important;
    color: #555 !important;
    -webkit-box-shadow: 0 0 0 1000px white inset !important;
    -webkit-text-fill-color: #555555 !important;
  }
  .payment-ct {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    margin-bottom: 3.2rem;
    p {
      font-weight: 700;
      font-size: 1.2rem;
      line-height: 1.6rem;
      letter-spacing: -0.21px;
      color: #000000;
      margin-bottom: 0.2rem;
    }
  }
  .method-ct {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }
  .emoney-ct {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
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
  .radio-field .is-invalid {
    border: 0.1rem solid #cd2c2c;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 2rem;
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
    .form-field {
      width: 30.9rem;
    }
    input {
      width: 30.9rem;
    }
    .address-field {
      width: calc(68.9rem - 5.5rem);
    }

    .form-ct {
      width: 68.9rem;
      padding: 3rem 2.7rem 3rem 2.8rem;
    }
    .details-container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 1.5rem;
      margin-bottom: 3.2rem;
    }
    .radio-field {
      width: 30.9rem;
    }
    .emoney-ct {
      flex-direction: row;
      gap: 1.6rem;
    }
    .payment-ct {
      flex-direction: row;
      justify-content: space-between;
    }
  }
  @media (min-width: 90em) {
    align-items: flex-start;
    padding: 3.8rem 0rem;

    .address-field {
      width: calc(73rem - 9.6rem);
    }
    .form-ct {
      width: 73rem;
      padding: 5.4rem 4.8rem 4.8rem 4.8rem;
    }
    .details-container {
      margin-bottom: 5.3rem;
    }
  }
`;
export default CheckoutForm;
