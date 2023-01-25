import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../context/cart_context";
import { PriceFormatter } from "../../utils/HelperFunctions";
import CartItem from "./CartItem";

function CartModal() {
  const { modalIsOpen, closeModal, cart, totalItems, cartTotal } =
    useCartContext();
  return (
    <Wrapper>
      <div className={!modalIsOpen ? "cart-modal hidden" : "cart-modal"}>
        <button className="btn--close-modal" onClick={closeModal}>
          &times;
        </button>
        {cart.length > 0 ? (
          <div className="modal-main-content">
            <div className="cart-modal__header">
              <h4>cart ({totalItems})</h4> <p>Remove all</p>
            </div>
            <div className="cart-items">
              {cart.map((item: any) => {
                return (
                  <CartItem
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    item={item}
                  />
                );
              })}
            </div>
            <div className="total-wrap">
              <p>TOTAL</p>
              <p className="total-amount">{PriceFormatter(cartTotal)}</p>
            </div>

            <NavLink to="/checkout" className="btn btn--full">
              checkout
            </NavLink>
          </div>
        ) : (
          <p className="empty">CART IS EMPTY</p>
        )}
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  /* MODAL WINDOW */
  .cart-modal {
    position: fixed;
    top: 12rem;
    right: 2.8rem;
    width: 32.7rem;
    background-color: #ffffff;
    padding: 3.2rem 2.8rem;
    border-radius: 0.8rem;
    box-shadow: 0 4rem 6rem rgba(0, 0, 0, 0.3);
    z-index: 1000;
    transition: all 0.5s;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    max-height: 50rem;
    overflow: auto;
  }

  .modal-main-content {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }
  .cart-items {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }
  .cart-modal__header {
    display: flex;
    justify-content: space-between;
    h4 {
      font-weight: 700;
      font-size: 1.8rem;
      line-height: 2.5rem;
      letter-spacing: 1.29px;
      text-transform: uppercase;
      color: #000000;
    }
    p {
      color: #000000;
    }
  }

  .btn--close-modal {
    font-family: inherit;
    color: var(--pale-black-5);
    position: absolute;
    top: -1rem;
    right: 1.6rem;
    font-size: 4.2rem;
    font-weight: 400;
    cursor: pointer;
    border: none;
    background: none;
  }
  .btn--close-modal:hover {
    color: #d87d4a;
  }
  .total-wrap {
    width: 100%;
    display: flex;
    flex-direction: row;
    color: var(--pale-black-5);
    justify-content: space-between;
    .total-amount {
      font-weight: 700;
      color: black;
    }
    margin-top: 0.8rem;
  }
  .empty {
    align-self: center;
    font-weight: 700;
    font-size: 1.8rem;
    letter-spacing: 0.3px;
  }
  .btn {
    font-weight: 500;
    text-align: center;
  }
  @media (min-width: 48em) {
    .cart-modal {
      right: 3.9rem;
      width: 37.7rem;
      padding: 3.2rem;
    }
  }

  @media (min-width: 90em) {
    .cart-modal {
      right: 16.5rem;
    }
  }
`;
export default CartModal;
