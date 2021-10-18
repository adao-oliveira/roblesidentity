import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';
import PText from './PText';

const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-top: -60px;
  }
  .hero__heading {
    font-size: 50px;
    margin-bottom: -4rem;
    position: relative;
    span {
      width: 100%;
      color: #fff;
    }
    .hero__name {
      font-family: 'Montserrat SemiBold';
      font-size: 50px;
      color: #ff65c3;
      display: inline;
    }
  }
  .hero__info a {
    color: #fff !important;
    background-color: var(--gray-2);
  }
  .hero__img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
  }
  .hero__info {
    margin-top: -10rem;
  }
  .hero__social,
  .hero__scrollDown {
    display: flex;
    position: fixed;
    flex-direction: column;
    gap: 2rem;
    top: 350px;
    width: 50px;
  }
  .hero__social {
    left: 5px;
  }
  .hero__scrollDown {
    right: 5px;
  }

  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
      color: #ff65c3;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    img {
      max-height: 70px;
    }
  }

  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 1.6rem;
          transform: rotate(-90deg);
          letter-spacing: 5px;
          margin-bottom: 2rem;
          color: #ff65c3;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
      margin-top: -100px;
    }
    .hero__heading {
      font-size: 30px;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 30px;
      }
    }
    .hero__img {
      height: 315px;
    }
    .hero__info {
      margin-top: -12rem;
    }
    .hero__social {
      left: 0px;
      bottom: -15%;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <div className="hero__img">
            <img src="https://res.cloudinary.com/robles-identity/image/upload/v1633872987/PicsArt_10-10-10.35.51_zs3f7v.jpg" alt="" />
          </div>
          <div className="hero__info">
            <PText>
              <span className="hero__heading">
                <span>Somos a </span>
                <span className="hero__name">ROBLES IDENTITY</span>
              </span>
            </PText>
            <Button btnText="Veja nossos trabalhos" btnLink="/projects" />
          </div>
          <div className="hero__social">
            <div className="hero__social__indicator">
              <p>Siga</p>
              <img src={SocialMediaArrow} alt="icon" />
            </div>
            <div className="hero__social__text">
              <ul>
                <li>
                  <a
                    href="http://facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    FB
                  </a>
                </li>
                <li>
                  <a
                    href="http://instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    IG
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hero__scrollDown">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="ScrollDown Arrow" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
