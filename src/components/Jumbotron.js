import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import boatImage from '../assets/boatImage.jpg';

const Styles = styled.div`
  .jumbo {
    background: url(${boatImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 500px;
    position: relative;
    z-index: -2;
    padding-top: 200px;
  }

  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <div className="TextoFixo">
          <h1 className="blink_me">
          &#8220; DESIGN CRIA CULTURA
          </h1>
          <h1 className="blink_me">
            CULTURA MOLDA VALORES
          </h1>
          <h1 className="blink_me">
            VALORES DETERMINAM O FUTURO &#8220;
          </h1>
        </div>
      </Container>
    </Jumbo>
  </Styles>
)
