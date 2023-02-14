import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import { PriceFormatter } from "../utils/HelperFunctions";
import CheckoutItem from "./checkout/CheckoutItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
function ConfirmationModal() {
  const { confirmationIsOpen, closeConfirmation, cart, totalItems, cartTotal } =
    useCartContext();
  return (
    <Wrapper>
      <div className={!confirmationIsOpen ? "modal hidden" : "modal"}>
        {cart && cart.length > 0 ? (
          <div className="modal-main-content">
            <div className="modal__header">
              <div className="icon-wrap">
                <FontAwesomeIcon className="check-icon" icon={faCheck} />
              </div>

              <h4>
                THANK YOU
                <br /> FOR YOUR ORDER
              </h4>
              <p>You will receive an email confirmation shortly.</p>
            </div>
            <div className="product-ct">
              <div>
                <div className="purchased-products">
                  <CheckoutItem
                    key={cart[0].id}
                    id={cart[0].id}
                    image={cart[0].image}
                    name={cart[0].name}
                    price={cart[0].price}
                    quantity={cart[0].quantity}
                    item={cart[0]}
                  />
                </div>
                {totalItems - cart[0].quantity !== 0 && (
                  <div className="other-items">
                    <p>and {totalItems - cart[0].quantity} other item(s)</p>
                  </div>
                )}
              </div>

              <div className="total-paid">
                <h5>GRAND TOTAL</h5>
                <p>{PriceFormatter(cartTotal + 50)}</p>
              </div>
            </div>

            <NavLink
              to="/"
              className="btn btn--full"
              onClick={closeConfirmation}
            >
              BACK TO HOME
            </NavLink>
          </div>
        ) : null}
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 32.7rem;
    background-color: #ffffff;
    padding: 3.2rem;
    border-radius: 0.8rem;
    box-shadow: 0 4rem 6rem rgba(0, 0, 0, 0.3);
    z-index: 10000;
    transition: all 0.5s;
    display: flex;
    flex-direction: column;
    height: 60rem;
  }
  .modal__header {
    display: flex;
    flex-direction: column;
    .icon-wrap {
      width: 6.4rem;
      height: 6.4rem;
      background-color: #d87d4a;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 2.4rem;
      .check-icon {
        font-size: 3.2rem;
        color: #ffffff;
      }
    }
    h4 {
      font-weight: 700;
      font-size: 2.4rem;
      line-height: 2.8rem;
      letter-spacing: 0.86px;
      text-transform: uppercase;
      color: #000000;
      margin-bottom: 1.6rem;
    }
    p {
      font-size: 1.5rem;
      line-height: 2.5rem;
      color: var(--pale-black-5);
    }
  }
  .modal-main-content {
    display: flex;
    flex-direction: column;
  }
  .product-ct {
    border-radius: 0.8rem;
    margin-bottom: 2.3rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    .purchased-products {
      display: flex;
      justify-content: center;
      align-items: center;
      .name-price-ct {
        align-items: center;
      }
      background-color: #f1f1f1;
      .checkout-product {
        width: 20.7rem;
        border-bottom: 1px solid var(--pale-black-08);
        height: 9rem;
        p {
          font-size: 1.4rem;
          line-height: 2rem;
        }
        .cart-image {
          width: 2.8rem;
          height: 3.2rem;
        }
      }
    }
    .other-items {
      background-color: #f1f1f1;
      height: 5.3rem;
      text-align: center;
      color: var(--pale-black-5);
      font-size: 1.2rem;
      line-height: 1.6rem;
      letter-spacing: -0.2px;
      padding-top: 0.2rem;
    }
  }
  .total-paid {
    background-color: #000000;
    color: #ffffff;
    height: 9.2rem;
    h5 {
      color: var(--pale-white-5);
      font-size: 1.5rem;
      line-height: 2.5rem;
      font-weight: 400;
      margin-bottom: 0.8rem;
    }
    padding: 1rem 0rem 1.9rem 2.4rem;
    p {
      font-size: 1.8rem;
      line-height: 2.5rem;
    }
  }

  .btn {
    font-weight: 500;
    text-align: center;
  }

  @media (min-width: 48em) {
    .modal {
      width: 54rem;
      padding: 4.8rem;
      height: 58.1rem;
    }

    .modal__header {
      display: flex;
      flex-direction: column;
      .icon-wrap {
        margin-bottom: 3.3rem;
      }
      h4 {
        font-size: 3.2rem;
        line-height: 3.6rem;
        letter-spacing: 1.14px;
        margin-bottom: 2.4rem;
      }
      margin-bottom: 3.3rem;
    }
    .product-ct {
      margin-bottom: 4.6rem;
      flex-direction: row;
      .purchased-products {
        width: 24.6rem;
        .checkout-product {
          width: 19.8rem;
          height: 8.6rem;
          .cart-image {
            width: 5rem;
            height: 5rem;
          }
        }
      }
    }
    .total-paid {
      height: 14rem;
      width: 19.8rem;
      padding: 0rem 0rem 0rem 2.4rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`;
export default ConfirmationModal;
