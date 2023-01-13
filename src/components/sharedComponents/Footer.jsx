import styled from "styled-components";
import Navbar from "../Navbar";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
function Footer(props) {
  return (
    <Wrapper>
      <footer className="footer">
        <div className="footer-ct">
          <img
            src={process.env.PUBLIC_URL + "/rectangle.png"}
            className="footer-box-style-img"
            alt="logo"
          />
          <div className="logo-nav-container">
            <div>
              <NavLink to="/">
                <img
                  src={process.env.PUBLIC_URL + "/logo.svg"}
                  className="logo"
                  alt="logo"
                />
              </NavLink>
            </div>
            <Navbar />
          </div>
          <div className="text-icons-ct">
            <div className="footer-text-box">
              <p>
                Audiophile is an all in one stop to fulfill your audio needs.
                We're a small team of music lovers and sound specialists who are
                devoted to helping you get the most out of personal audio. Come
                and visit our demo facility - we’re open 7 days a week.
              </p>
            </div>
            <div className="copyright-soc-box">
              <p>Copyright 2021. All Rights Reserved</p>
              <div className="social-ct">
                <FontAwesomeIcon
                  className="social-icon"
                  icon={faSquareFacebook}
                />
                <FontAwesomeIcon className="social-icon" icon={faTwitter} />
                <FontAwesomeIcon className="social-icon" icon={faInstagram} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
}
const Wrapper = styled.footer`
  /* FOOTER */
  .footer {
    min-width: 100vw;
    height: 65.4rem;
    background-color: #191919;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-bottom: -0.1rem;
    border-top: 1px solid hwb(0 100% 0% / 0.2);
  }
  .footer-ct {
    width: calc(100% - 4.8rem);
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #191919;
    border-bottom: 1px solid hwb(0 100% 0% / 0.2);
    text-align: center;
    position: relative;
  }
  .footer-box-style-img {
    position: absolute;
    top: -0.1rem;
    left: 0rem;
  }
  .logo-nav-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3.2rem;
    margin-bottom: 4.8rem;
  }
  .nav-list {
    padding-top: 0rem;
    padding-left: 0rem;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.6rem;
    margin-left: unset;
  }
  .nav-link:link,
  .nav-link:visited {
    display: inline-block;
    text-decoration: none;
    margin-bottom: 0;
    font-weight: 700;
    font-size: 1.3rem;
    line-height: 2.5rem;
    transition: all 0.3s;
    color: #ffffff;
    letter-spacing: 0.2rem;
  }
  .nav-link:hover,
  .nav-link:active {
    color: #d87d4a;
  }
  .footer-text-box {
    width: 32.8rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4.8rem;
  }
  p {
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 2.5rem;
    color: #ffffff;
    opacity: 0.5;
  }
  .social-ct {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1.6rem;
  }
  .social-icon {
    width: 2.4rem;
    height: 2.4rem;
    color: #ffffff;
    cursor: pointer;
    &:hover {
      color: #d87d4a;
    }
  }
  .text-icons-ct {
    display: flex;
    flex-direction: column;
    gap: 4.8rem;
  }
  .copyright-soc-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4.8rem;
  }
  @media (min-width: 48em) {
    .logo-nav-container {
      align-items: flex-start;
    }
    .footer-ct {
      width: calc(100% - 7.8rem);
      align-items: flex-start;
    }

    .footer-text-box {
      width: 100%;
      align-items: flex-start;
      justify-content: flex-start;
      text-align: left;
      align-self: flex-start;
    }
    .nav-list {
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      gap: 3.4rem;
    }
    .text-icons-ct {
      width: 100%;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: flex-end;
    }
    .copyright-soc-box {
      flex-direction: row;
      width: calc(100vw - 7.8rem);
      justify-content: space-between;
    }
  }

  @media (min-width: 90em) {
    .logo-nav-container {
      width: 100%;
      flex-direction: row;
      justify-content: space-between;
    }
    .footer-ct {
      width: calc(100vw - 33rem);
    }

    .footer-text-box {
      width: 54rem;
    }
    .text-icons-ct {
      align-items: center;
    }
    .copyright-soc-box {
      width: calc(100vw - 33rem);
    }
    .social-ct {
      align-self: flex-start;
      margin-top: -9.6rem;
    }
  }
`;
export default Footer;
