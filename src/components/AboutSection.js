import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import AboutImg from '../assets/images/about-sec-img.png';
import ScrollAnimation from 'react-animate-on-scroll'

const AboutSectionStyles = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyles>
      <div className="container">
        <div className="aboutSection__left">
          <PText>
            <ScrollAnimation animateIn='animate__lightSpeedInLeft'>
              <h1 className="mt-4 mb-8 text-center" style={{ color: '#ff65c3', fontSize: '30px' }}>ORIGEM DO NOME</h1>
            </ScrollAnimation>
            <ScrollAnimation animateIn='animate__backInLeft'>
              <p>
                Nosso intuito desde o início foi juntar nossas habilidades para criar algo inovador que ajudasse as empresas e seus projetos a alavancarem de forma única.
                O que define uma empresa com toda certeza é a sua identidade, e uma identidade é formada por características visuais e internas, princípios e valores, por esse motivo escolhemos
                o sobrenome<p style={{ color: '#ff65c3', display: 'inline' }}> "ROBLES"</p> da Juliana,
                a pessoa responsável pela idéia da empresa e pela parte visual da empresa e acrescentamos o <p style={{ color: '#ff65c3', display: 'inline' }}> "IDENTITY"</p> que traduzindo
                do inglês para o português é <p style={{ color: '#ff65c3', display: 'inline' }}> "IDENTIDADE"</p>.
              </p>
            </ScrollAnimation>

            <ScrollAnimation animateIn='animate__lightSpeedInLeft'>
              <h1 className="mt-8 mb-8 text-center" style={{ color: '#ff65c3', fontSize: '30px' }}>NOSSA PROPOSTA</h1>
            </ScrollAnimation>

            <ScrollAnimation animateIn='animate__backInLeft'>
              <p>
                A base do crescimento ou a realização de um projeto é o reconhecimento. Para ser reconhecido, primeiro você precisa ser lembrado visualmente,
                para isso na criação de um projeto as empresas renomadas estabelecem cores padrões que retratam seus valores, princípios e símbolos,
                que juntos formam toda a estrutura da sua logotipo/logomarca por exemplo.
              </p>

              <p>
                Sabemos que só cores, símbolos e logotipos não é o suficiente para alavancar uma empresa,
                por isso, é importante a visibilidade no maior meio de comunicação que existe, a <p style={{ color: '#ff65c3', display: 'inline' }}> INTERNET</p>, para isso nós contamos com o nosso programador e desenvolvedor de sites Adão Oliveira,
                para desenvolver do zero o site que irá promover a sua empresa e juntamente com a parte visual irão trazer a visibilidade da mesma.
              </p>

              <p>
                Para concluir e ter a identidade da sua empresa formada além desses pontos anteriores, é necessário a formação dos princípios e valores que definem a proposta da mesma.
                É necessário parar, pensar no que a sua empresa oferece, acrescentar oque defende, o seu foco principal como base e atribuir à características de um caráter.
              </p>

              <p>
                Princípios, valores, cores, símbolos e a visibilidade ampla atribuídas, pronto! A empresa irá ter sua identidade formada e um sonho se tornando de fato realidade.
              </p>
            </ScrollAnimation>

            <ScrollAnimation animateIn='animate__zoomIn'>
              <h1 className="mt-8 text-center" style={{ color: '#ff65c3' }}>
                NOSSO FOCO É TIRAR SEU PROJETO DO PAPEL E ALAVANCAR SUAS IDÉIAS
              </h1>
            </ScrollAnimation>
            <div className="detalhe flex justify-center pb-10">
              <a href="/NossoID">
                <button type="button" className="btn mt-4 text-white font-semibold" style={{ backgroundColor: '#ff65c3' }}>&#123; Saiba mais sobre nosso ID &#125;</button>
              </a>
            </div>
          </PText>
        </div>
        <div className="aboutSection__right">
          <img className="aboutImg" src={AboutImg} alt="Img" />
        </div>
      </div>
    </AboutSectionStyles>
  );
}
