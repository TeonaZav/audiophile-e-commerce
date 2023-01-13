import React from "react";
import styled from "styled-components";
import AboutImageMobile from "../../assets/shared/mobile/image-best-gear.jpg";
function About(props) {
  return (
    <Wrapper>
      <section className="section-about">
        <div className="about-ct">
          <div className="main-img">
            <img src={AboutImageMobile} alt="a man with black headphones" />
          </div>
          <div className="about-text-box">
            <h2>
              Bringing you the <span className="text-emp">best</span> audio gear
            </h2>
            <p>
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100vw;
  height: 93.8rem;
  background-color: #f2f2f2;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .main-img {
    width: 32.7rem;
    height: 30rem;
  }
  .main-img img {
    max-width: 100%;
  }
  .about-ct {
    height: 100%;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;
  }

  .about-text-box {
    width: 32.8rem;
    color: #000000;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3.2rem;
  }

  h2 {
    font-weight: 700;
    font-size: 2.8rem;
    line-height: 3.8rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  p {
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 2.5rem;
    opacity: 0.5;
  }
  .text-emp {
    color: #d87d4a;
  }
  @media (min-width: 48em) {
    height: 82.5rem;

    .about-ct {
      gap: 6.3rem;
    }
    .main-img {
      content: url(${require(`../../assets/shared/tablet/image-best-gear.jpg`)}) !important;
    }
    .main-img {
      width: calc(100% - 7.8rem);
    }
    .about-text-box {
      width: 57.3rem;
    }
  }
  @media (min-width: 90em) {
    height: 98.8rem;
    flex-direction: row;
    .about-ct {
      flex-direction: row-reverse;
      max-width: calc(100vw - 33rem);
      min-width: 111rem;
      justify-content: space-between;
    }

    .main-img {
      content: url(${require(`../../assets/shared/desktop/image-best-gear.jpg`)}) !important;
    }
    .main-img {
      width: 54rem;
      height: 58.8rem;
    }
    .about-text-box {
      width: 44.5rem;
      text-align: left;
    }
  }
`;
export default About;
