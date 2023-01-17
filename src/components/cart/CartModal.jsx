import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../context/cart_context";
import CartItem from "./CartItem";
function CartModal({ showModal, setShowModal }) {
  // Modal window
  const { modalIsOpen, closeModal, cart } = useCartContext();
  return (
    <Wrapper>
      <div className={!modalIsOpen ? "cart-modal hidden" : "cart-modal"}>
        <button className="btn--close-modal" onClick={closeModal}>
          &times;
        </button>
        <div className="cart-modal__header">
          <h4>cart (3)</h4> <p>Remove all</p>
        </div>
        {/* <form class="cart-modal__form">
          <label>First Name</label>
          <input type="text" />
          <label>Last Name</label>
          <input type="text" />
          <label>Email Address</label>
          <input type="email" />
          <button class="btn">Next step &rarr;</button>
        </form> */}
        {cart.length > 0
          ? cart.map((item) => {
              return (
                <CartItem
                  image={item.image}
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
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
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
    right: 0.8rem;
    font-size: 4rem;
    cursor: pointer;
    border: none;
    background: none;
  }
  .hidden {
    visibility: hidden;
    opacity: 0;
  }
  @media (min-width: 48em) {
  }

  @media (min-width: 90em) {
  }
`;
export default CartModal;
