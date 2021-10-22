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
  h2 {
    color: #1d20ff;
    text-transform: uppercase;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: center;
    padding: 1rem 0;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      padding-left: 20px;
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
      <div className="container -mt-32">
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
            heading="Contatos"
            links={[
              {
                title: 'Instagram',
                path: 'https://www.instagram.com/roblesidentity/',
              },
              {
                title: 'Facebook',
                path: 'https://www.facebook.com/',
              },
              {
                title: 'E-mail',
                path: 'mailto:roblesidentity@outlook.com',
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
