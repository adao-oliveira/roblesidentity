import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import PText from './PText';

const ContactBannerStyles = styled.div`
  padding: 5rem 0;
  .contactBanner__wrapper {
    background-color: var(--deep-dark);
    border-radius: 12px;
    padding: 5rem 0rem;
    text-align: center;
  }
  .contactBanner__heading {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
  .contactBanner__wrapper a {
    color: #fff !important;
    background-color: var(--gray-2);
  }
  @media only screen and (max-width: 768px) {
    .contactBanner__heading {
      font-size: 2.8rem;
    }
  }
`;

export default function ContactBanner() {
  return (
    <ContactBannerStyles>
      <div className="container -mt-32 -mb-32">
        <div className="contactBanner__wrapper">
          <PText>Tem um projeto em mente?</PText>
          <h3 className="contactBanner__heading">Deixe-nos te ajudar</h3>
          <Button btnText="Contate-nos" btnLink="/contact" />
        </div>
      </div>
    </ContactBannerStyles>
  );
}
