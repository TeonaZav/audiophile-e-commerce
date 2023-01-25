import React from "react";
import styled from "styled-components";

function About() {
  return (
    <Wrapper>
      <section className="section-about">
        <div className="about-ct">
          <div className="main-img">
            <picture>
              <source
                media="(min-width:1440px)"
                srcSet={
                  process.env.PUBLIC_URL +
                  "/assets/shared/desktop/image-best-gear.jpg"
                }
              />
              <source
                media="(min-width:768px)"
                srcSet={
                  process.env.PUBLIC_URL +
                  "/assets/shared/tablet/image-best-gear.jpg"
                }
              />

              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/shared/mobile/image-best-gear.jpg"
                }
                alt="headphone"
              />
            </picture>
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
  height: 81.8rem;
  background-color: var(--main-bg-color);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .main-img {
    width: 32.7rem;
    min-height: 30rem;
  }
  .main-img img {
    max-width: 100%;
    height: 100%;
    border-radius: 0.8rem;
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

  .text-emp {
    color: #d87d4a;
  }
  @media (min-width: 48em) {
    height: 72.9rem;
    .about-ct {
      gap: 6.3rem;
    }
    .main-img {
      width: calc(100% - 7.8rem);
      height: 30rem;
    }
    .main-img img {
      width: 100%;
      height: 100%;
      border-radius: 0.8rem;
    }
    .about-text-box {
      width: 57.3rem;
    }
  }
  @media (min-width: 90em) {
    min-height: 78.8rem;
    flex-direction: row;
    .about-ct {
      flex-direction: row-reverse;
      width: 111rem;
      justify-content: space-between;
      gap: 0;
    }
    .main-img {
      width: 54rem;
      height: 58.8rem;
    }
    .main-img img {
      border-radius: 0.8rem;
      height: 100%;
      width: 100%;
    }

    .about-text-box {
      width: 44.5rem;
      text-align: left;
    }
  }
`;
export default About;
