import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import Typical from 'react-typical';

const Styles = styled.div`
  .jumbo {
    background: url('') no-repeat fixed bottom;
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
        <div className="textNeon">
          <h1 className="blink_me mt-16" style={{ fontSize: '40px' }}>
            <Typical
              loop={Infinity}
              steps={[
                '❝ DESIGN CRIA CULTURA,',
                1000,
                'CULTURA MOLDA VALORES,',
                1000,
                'VALORES DETERMINAM O FUTURO ❝',
                1000
              ]}
            />
          </h1>
        </div>
      </Container>
    </Jumbo>
  </Styles>
)
