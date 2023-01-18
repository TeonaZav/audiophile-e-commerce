import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../context/cart_context";
import CartItem from "./CartItem";
function CartModal({ showModal, setShowModal }) {
  const { modalIsOpen, closeModal, cart } = useCartContext();
  return (
    <Wrapper>
      <div className={!modalIsOpen ? "cart-modal hidden" : "cart-modal"}>
        <button class="btn--close-modal" onClick={closeModal}>
          &times;
        </button>
        <div className="cart-modal__header">
          <h4>cart (3)</h4> <p>Remove all</p>
        </div>

        {cart.length > 0
          ? cart.map((item) => {
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
            })
          : "cart is empty"}
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
      font-weight: 500;
      font-size: 15px;
      line-height: 25px;
      color: #000000;
    }
  }

  .cart-modal__form {
    margin: 0 3rem;
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    gap: 2.5rem;
  }

  .cart-modal__form label {
    font-size: 1.7rem;
    font-weight: 500;
  }

  .cart-modal__form input {
    font-size: 1.7rem;
    padding: 1rem 1.5rem;
    border: 1px solid #ddd;
    border-radius: 0.5rem;
  }

  .cart-modal__form button {
    grid-column: 1 / span 2;
    justify-self: center;
    margin-top: 1rem;
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
