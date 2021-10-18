import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';
import ScrollAnimation from 'react-animate-on-scroll'

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .container {
    padding-left: 20px;
    padding-right: 20px;
  }
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
    margin-top: -50px;
    margin-bottom: -100px;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      // border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
  @keyframes fa-blink {
    0% { opacity: 1; }
    50% { opacity: 0.5; }
    100% { opacity: 0; }
}
.fa-blink {
  -webkit-animation: fa-blink .75s linear infinite;
  -moz-animation: fa-blink .75s linear infinite;
  -ms-animation: fa-blink .75s linear infinite;
  -o-animation: fa-blink .75s linear infinite;
  animation: fa-blink .75s linear infinite;
  height: 48px;
  width: 48px
}
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container mt-32">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading text-center" style={{ fontSize: '35px' }}>
                Olá, somos a
                <br /><span>ROBLES IDENTITY</span>
              </p>
              <h2 className="about__heading text-uppercase" style={{ color: '#1d20ff', fontSize: '20px', textAlign: 'center' }}>
                Para nos conhecer é necessário saber do que é composta a nossa empresa desde internamente até a visibilidade externa
              </h2>
              <div className="about__info">
                <PText>
                  <ScrollAnimation animateIn='fadeIn'>
                    <div className="ID_container bd-grid">
                      <div>

                        <h1 className="mt-4 mb-8 text-center" style={{ color: '#ff65c3', fontSize: '30px' }}>A LOGO:</h1>

                        <p className="ID_text">
                          A ROBLES IDENTITY foi fundada com princípios de programação e design gráfico inicialmente, por esse motivo analisamos e desenvolvemos a nossa logo de uma forma de juntasse esses dois requisitos.
                          Usando a linguagem da programação se observa diversas cores, cada cor representa algum comando específico, no caso da ROBLES IDENTITY escolhemos o azul marinho e um rosa bebê marcante, que
                          tanto representa a parte da programação como também as duas pessoas, sendo eles, um homem e uma mulher que deram origem a empresa.
                          Se tratando de uma empresa que gera identidade, é claro que na nossa logo não poderia faltar um elemento que representasse isso, por isso, utilizamos digitais que num documento é considerado parte
                          da sua identidade.
                        </p>

                        <p className="ID_text">
                          Por fim juntando esses dois requisitos, de forma sobreposta, colcoamos duas digitais, sendo elas uma azul e uma rosa.
                        </p>


                        <h1 className="mt-8 mb-8 text-center" style={{ color: '#ff65c3', fontSize: '30px' }}>AS FONTES:</h1>

                        <p className="ID_text">
                          Em todas os comunicados e até mesmo no desenvolvimento do site da ROBLES IDENTITY, nós usamos 3 fontes padrões, específicas para cada proposta. A fontes escolhidas por nós definem exatamente quem
                          somos.
                          <br /><br />
                          <img class="fa-blink" src="https://res.cloudinary.com/robles-identity/image/upload/v1627523061/1627441762764_copy_1280x1280_ndb4xv.png" style={{display:'inline'}} />
                          A fonte <span className="text-uppercase text-inline" style={{ display: 'inline', color: '#1d20ff', fontFamily: 'Roboto Condensed' }}>" Noto Sans Display "</span> representa uma proposta mais séria e moderna, algo mais padrão social.
                          <br /><br />
                          <img class="fa-blink" src="https://res.cloudinary.com/robles-identity/image/upload/v1627523061/1627441762764_copy_1280x1280_ndb4xv.png" style={{display:'inline'}} />
                          A fonte ** representa uma modernidade mais juvial, algo mais divertido e atualizado, que também definem a inovação e a evolução.
                          <br /><br />
                          <img class="fa-blink" src="https://res.cloudinary.com/robles-identity/image/upload/v1627523061/1627441762764_copy_1280x1280_ndb4xv.png" style={{display:'inline'}} />
                          A fonte ** representa essas duas características as anteriores que unidas, trazem uma proposta de identidade única, podendo ter uma identidade juvial, atualizada mas ao mesmo tempo também moderna e
                          sofisticada.
                        </p>


                        <h1 className="mt-8 mb-8 text-center" style={{ color: '#ff65c3', fontSize: '30px' }}>AS IMAGENS:</h1>

                        <p className="ID_text">
                          Se tratando da linguagem de programação que se atualiza a cada minuto, focamos em algo totalmente voltado a tecnologia, a estrutura moderna e a originalidade de cada imagem que é manipulada detalhe
                          por detalhe.
                        </p>


                        <h1 className="mt-8 mb-8 text-center" style={{ color: '#ff65c3', fontSize: '30px' }}>PRINCÍPIOS E VALORES:</h1>

                        <p className="ID_text">
                          A idéia da ROBLES IDENTITY surgiu desde muito tempo atrás, quando ambos os fundadores trabalhavam de forma autônoma desenvolvendo idéias para clientes internos.
                          <br /><br />Percebemos que a maioria dos autônomos não possuíam um projeto construído tendo como base uma identidade,
                          e por esse motivo não obtinham resultados satisfatóriosem relação a reconhecimento
                          e crescimento.
                          <br /><br />É muito difícil um comércio dar certo sem uma parte gráfica,
                          um reconhecimento de visibilidade e sem uma entrada na internet,
                          sem esses requisitos você pode sim ser reconhecido, mas apenas
                          por quem você procura ou por pessoas próximas a você.
                          <br /><br />Empresas grandes, multi nacionais,
                          que possuem filiadas possuem identidade formada e são inseridas totalmente no maior meio de comunicação existente,
                          A INTERNET, são conhecidas por todos de forma multiplicada, por isso a importância da identidade.
                          <br /><br />Observando isso e até mesmo trabalhando nesses meios,
                          juntando nossas idéias desenvolvemos um método que em união com vocês,
                          nossos clientes, desenvolvemos do zero uma identidade e um domínio
                          para a sua empresa, para que ela seja reconhecida e expandida.
                        </p>

                        <br /><p className="ID_text">
                          Nos nossos valores estão envolvidos o caráter, a honestidade, a empatia e o compromisso.
                        </p>

                        <br /><p className="ID_text">
                          <span style={{ color: '#1d20ff', fontSize:'25px' }}>Caráter</span>
                          <br />Nossa empresa é baseada na identidade, a identidade é formada pelo caráter, e o caráter é formado por características que definem quem nós somos. Por esse motivo é de extrema importância que
                          que nos nossos valores estivesse incluído o caráter.
                        </p>

                        <br /><p className="ID_text">
                          Honestidade - Somos totalmente entregues as propostas que recebemos e que entregamos, sem acepção de recursos, pessoas ou idéias, a honestidade faz parte da nossa identidade.
                        </p>

                        <br /><p className="ID_text">
                          <span style={{ color: '#1d20ff', fontSize:'25px' }}>Empatia</span>
                          <br />Nossa empresa é uma empresa totalmente voltada à pessoas desde o princípio. Nos preocupamos com seus sonhos, projetos e metas e buscamos realizar tudo isso da melhor forma possível
                          indicando o caminho e seguindo seus passos até que possa caminhar sozinho.
                        </p>

                        <br /><p className="ID_text">
                          <span style={{ color: '#1d20ff', fontSize:'25px' }}>Compromisso</span>
                          <br />Sempre que nos comprometemos com um projeto, seja ele desafiador ou não, nos dedicamos compromissadamente a eles até que sejam concluídos com excelência e satisfação.
                        </p>

                        <h1 className="mt-8 text-center" style={{ color: '#ff65c3', fontSize: '30px' }}>TUDO ISSO FORMA O <span style={{ color: '#1d20ff', display: 'inline' }}>NOSSO ID!</span></h1>

                      </div>
                    </div>
                  </ScrollAnimation>
                </PText>
              </div>
            </div>
            <div className="right">
              <img src="https://res.cloudinary.com/robles-identity/image/upload/v1633872268/PicsArt_10-10-10.24.16_rbspen.jpg" alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Nossas Habilidades</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={['HTML', 'CSS', 'JavaScript', 'REACT', 'NEXT']}
              />
              <AboutInfoItem
                title="BackEnd"
                items={['Node', 'Express', 'PHP']}
              />
              <AboutInfoItem
                title="Design"
                items={['Photoshop', 'Canva', 'Figma']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
