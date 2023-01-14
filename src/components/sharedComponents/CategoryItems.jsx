import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { categoryInfo } from "../../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
function CategoryItems(props) {
  return (
    <Wrapper>
      <section>
        <ul className="category-list">
          {categoryInfo.map((category) => {
            const { id, name, image } = category;
            const pic = "." + image;
            return (
              <li className="category-item" key={id}>
                <div className="category-img">
                  <img
                    src={require(`../../assets/shared/categories/image-${name.toLowerCase()}.png`)}
                    alt={`${name.toLowerCase()}`}
                  />
                  {console.log(pic)}
                </div>
                <NavLink
                  className="category-link"
                  to={`/${name.toLowerCase()}`}
                >
                  <div className="btn-shop-wrap">
                    <p className="name"> {name}</p>
                    <p className="btn-shop">
                      Shop{" "}
                      <FontAwesomeIcon
                        className="btn-shop-icon"
                        icon={faAngleRight}
                      />
                    </p>
                  </div>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </section>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  width: 100vw;
  height: 72.3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  margin-bottom: 9.6rem;
  margin-top: 9.6rem;
  .category-list {
    display: flex;
    flex-direction: column;
    gap: 6.8rem;
  }
  .category-item {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 32.7rem;
    height: 16.5rem;
    border-radius: 0.8rem;
    background: var(--card-color);
    position: relative;
  }
  .category-link {
    text-decoration: none;
    &:hover,
    &:active {
      transition: all 0.3s;
    }
    &:hover .btn-shop,
    &:active .btn-shop {
      color: #d87d4a;
    }
  }
  .name {
    color: #000000;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2rem;
    text-align: center;
    letter-spacing: 1.07px;
    text-decoration: none;
  }
  .category-img {
    width: 8rem;
    height: 10.4rem;
    position: absolute;
    top: -30%;
  }
  .category-img img {
    width: 100%;
    -webkit-filter: drop-shadow(5px 5px 5px #777777);
    filter: drop-shadow(5px 10px 5px #777777);
  }
  .btn-shop {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.3rem;
    line-height: 1.8rem;
    letter-spacing: 1px;
    color: var(--pale-black-5);
  }
  .btn-shop-icon {
    color: #d87d4a;
  }
  .btn-shop-wrap {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    align-items: center;
    text-align: center;
    margin-bottom: 2.2rem;
  }
  @media (min-width: 48em) {
    height: 32rem;
    flex-direction: row;
    justify-content: center;
    .category-list {
      flex-direction: row;
      gap: 1rem;
    }
    .category-item {
      width: 22.3rem;
    }
  }
  @media (min-width: 90em) {
    height: 31.3rem;
    flex-direction: row;
    margin-bottom: 11.8rem;
    margin-top: 11.8rem;
    .category-list {
      gap: 3rem;
    }
    .category-item {
      width: 35rem;
      height: 20.4rem;
    }
    .category-img {
      width: 12.3rem;
      height: 16rem;
    }
    .btn-shop-wrap {
      margin-bottom: 3rem;
    }
  }
`;
export default CategoryItems;
