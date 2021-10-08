import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Robles Identity</h1>
          <PText>
            Um web designer e desenvolvedor freelance de Chittagong, Bangladesh. Eu sempre crio sites com designs exclusivos e também com um bom índice de desempenho.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Links Importantes"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'Nosso ID',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projetos',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contato',
                path: '/contact',
              },
              {
                type: 'Link',
                title: 'Feedback',
                path: '/feedback',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Informação de contato"
            links={[
              {
                title: '+88012312',
                path: 'tel:+88012312',
              },
              {
                title: 'webcifar@gmail.com',
                path: 'mailto:webcifar@gmail.com',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Links sociais"
            links={[
              {
                title: 'Facebook',
                path: 'http://facebook.com',
              },
              {
                title: 'Twitter',
                path: 'http://twitter.com',
              },
              {
                title: 'Instagram',
                path: 'http://instagram.com',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            © 2021 - Robles Identity
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
