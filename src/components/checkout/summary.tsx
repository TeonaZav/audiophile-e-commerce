import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../context/cart_context";
import { PriceFormatter } from "../../utils/HelperFunctions";
import CheckoutItem from "./CheckoutItem";
function Summary() {
  const { cart, totalItems, cartTotal } = useCartContext();
  return (
    <Wrapper>
      <div className="summary">
        <div className="summary-main-content">
          <h4>summary</h4>

          <div className="checkout-items">
            {cart.map((item: any) => {
              return (
                <CheckoutItem
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
          <div className="total-wrap total">
            <p>TOTAL</p>
            <p className="total-amount">{PriceFormatter(cartTotal)}</p>
          </div>
          <div className="total-wrap shipping">
            <p>SHIPPING</p>
            <p className="total-amount">{PriceFormatter(50)}</p>
          </div>
          <div className="total-wrap vat">
            <p>VAT (INCLUDED)</p>
            <p className="total-amount">{PriceFormatter(cartTotal * 0.2)}</p>
          </div>
          <div className="total-wrap subtotal">
            <p>GRAND TOTAL</p>
            <p className="total-amount subtotal">
              {PriceFormatter(cartTotal + 50)}
            </p>
          </div>

          <NavLink to="/checkout" className="btn btn--full">
            CONTINUE & PAY
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .summary {
    width: 32.7rem;
    background-color: #ffffff;
    padding: 3.2rem 2.8rem;
    border-radius: 0.8rem;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }

  .modal-main-content {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }
  .checkout-items {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    margin-bottom: 3.2rem;
  }

  h4 {
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 2.5rem;
    letter-spacing: 1.29px;
    text-transform: uppercase;
    color: #000000;
    margin-bottom: 3.1rem;
  }
  p {
    color: #000000;
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
    p {
      color: var(--pale-black-5);
    }
    margin-top: 0.8rem;
  }
  .total-amount.subtotal {
    color: #d87d4a;
  }
  .total-wrap.subtotal {
    margin-top: 1.6rem;
    margin-bottom: 3.2rem;
  }
  .btn {
    font-weight: 500;
    text-align: center;
    width: 100%;
  }
  @media (min-width: 48em) {
    .summary {
      width: 68.9rem;
      padding: 3.2rem 3.3rem;
      gap: 2.4rem;
    }
  }

  @media (min-width: 90em) {
    .summary {
      width: 35rem;
      margin-top: 3.8rem;
    }
  }
`;
export default Summary;
