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
  width: 48px;
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
                Ol??, somos a
                <br /><span>ROBLES IDENTITY</span>
              </p>
              <h2 className="about__heading text-uppercase" style={{ color: '#1d20ff', fontSize: '20px', textAlign: 'center' }}>
                Para nos conhecer ?? necess??rio saber do que ?? composta a nossa empresa desde internamente at?? a visibilidade externa
              </h2>
              <div className="about__info">
                <PText>
                  <ScrollAnimation animateIn='fadeIn'>
                    <div className="ID_container bd-grid">
                      <div>

                        <h1 className="mt-4 mb-8 text-center" style={{ color: '#ff65c3', fontSize: '30px' }}>A LOGO:</h1>

                        <p className="ID_text">
                          A ROBLES IDENTITY foi fundada com princ??pios de programa????o e design gr??fico inicialmente, por esse motivo analisamos e desenvolvemos a nossa logo de uma forma de juntasse esses dois requisitos.
                          Usando a linguagem da programa????o se observa diversas cores, cada cor representa algum comando espec??fico, no caso da ROBLES IDENTITY escolhemos o azul marinho e um rosa beb?? marcante, que
                          tanto representa a parte da programa????o como tamb??m as duas pessoas, sendo eles, um homem e uma mulher que deram origem a empresa.
                          Se tratando de uma empresa que gera identidade, ?? claro que na nossa logo n??o poderia faltar um elemento que representasse isso, por isso, utilizamos digitais que num documento ?? considerado parte
                          da sua identidade.
                        </p>

                        <p className="ID_text">
                          Por fim juntando esses dois requisitos, de forma sobreposta, colcoamos duas digitais, sendo elas uma azul e uma rosa.
                        </p>


                        <h1 className="mt-8 mb-8 text-center" style={{ color: '#ff65c3', fontSize: '30px' }}>AS FONTES:</h1>

                        <p className="ID_text">
                          Em todas os comunicados e at?? mesmo no desenvolvimento do site da ROBLES IDENTITY, n??s usamos 3 fontes padr??es, espec??ficas para cada proposta. A fontes escolhidas por n??s definem exatamente quem
                          somos.
                          <br /><br />
                          <img class="fa-blink" src="https://res.cloudinary.com/robles-identity/image/upload/v1627523061/1627441762764_copy_1280x1280_ndb4xv.png" style={{display:'inline'}} />
                          A fonte <span className="text-uppercase text-inline" style={{ display: 'inline', color: '#1d20ff', fontFamily: 'Roboto Condensed' }}>" Roboto Mono Regular "</span> representa uma proposta mais s??ria e moderna, algo mais padr??o social.
                          <br /><br />
                          <img class="fa-blink" src="https://res.cloudinary.com/robles-identity/image/upload/v1627523061/1627441762764_copy_1280x1280_ndb4xv.png" style={{display:'inline'}} />
                          A fonte <span className="text-uppercase text-inline" style={{ display: 'inline', color: '#1d20ff', fontFamily: 'Roboto Condensed' }}>"  "</span> representa uma modernidade mais juvial, algo mais divertido e atualizado, que tamb??m definem a inova????o e a evolu????o.
                          <br /><br />
                          <img class="fa-blink" src="https://res.cloudinary.com/robles-identity/image/upload/v1627523061/1627441762764_copy_1280x1280_ndb4xv.png" style={{display:'inline'}} />
                          A fonte <span className="text-uppercase text-inline" style={{ display: 'inline', color: '#1d20ff', fontFamily: 'Roboto Condensed' }}>" Noto Sans Display "</span> representa essas duas caracter??sticas as anteriores que unidas, trazem uma proposta de identidade ??nica, podendo ter uma identidade juvial, atualizada mas ao mesmo tempo tamb??m moderna e
                          sofisticada.
                        </p>


                        <h1 className="mt-8 mb-8 text-center" style={{ color: '#ff65c3', fontSize: '30px' }}>AS IMAGENS:</h1>

                        <p className="ID_text">
                          Se tratando da linguagem de programa????o que se atualiza a cada minuto, focamos em algo totalmente voltado a tecnologia, a estrutura moderna e a originalidade de cada imagem que ?? manipulada detalhe
                          por detalhe.
                        </p>


                        <h1 className="mt-8 mb-8 text-center" style={{ color: '#ff65c3', fontSize: '30px' }}>PRINC??PIOS E VALORES:</h1>

                        <p className="ID_text">
                          A id??ia da ROBLES IDENTITY surgiu desde muito tempo atr??s, quando ambos os fundadores trabalhavam de forma aut??noma desenvolvendo id??ias para clientes internos.
                          <br /><br />Percebemos que a maioria dos aut??nomos n??o possu??am um projeto constru??do tendo como base uma identidade,
                          e por esse motivo n??o obtinham resultados satisfat??riosem rela????o a reconhecimento
                          e crescimento.
                          <br /><br />?? muito dif??cil um com??rcio dar certo sem uma parte gr??fica,
                          um reconhecimento de visibilidade e sem uma entrada na internet,
                          sem esses requisitos voc?? pode sim ser reconhecido, mas apenas
                          por quem voc?? procura ou por pessoas pr??ximas a voc??.
                          <br /><br />Empresas grandes, multi nacionais,
                          que possuem filiadas possuem identidade formada e s??o inseridas totalmente no maior meio de comunica????o existente,
                          A INTERNET, s??o conhecidas por todos de forma multiplicada, por isso a import??ncia da identidade.
                          <br /><br />Observando isso e at?? mesmo trabalhando nesses meios,
                          juntando nossas id??ias desenvolvemos um m??todo que em uni??o com voc??s,
                          nossos clientes, desenvolvemos do zero uma identidade e um dom??nio
                          para a sua empresa, para que ela seja reconhecida e expandida.
                        </p>

                        <br /><p className="ID_text">
                          Nos nossos valores est??o envolvidos o car??ter, a honestidade, a empatia e o compromisso.
                        </p>

                        <br /><p className="ID_text">
                          <span style={{ color: '#1d20ff', fontSize:'25px' }}>Car??ter</span>
                          <br />Nossa empresa ?? baseada na identidade, a identidade ?? formada pelo car??ter, e o car??ter ?? formado por caracter??sticas que definem quem n??s somos. Por esse motivo ?? de extrema import??ncia que
                          que nos nossos valores estivesse inclu??do o car??ter.
                        </p>

                        <br /><p className="ID_text">
                          Honestidade - Somos totalmente entregues as propostas que recebemos e que entregamos, sem acep????o de recursos, pessoas ou id??ias, a honestidade faz parte da nossa identidade.
                        </p>

                        <br /><p className="ID_text">
                          <span style={{ color: '#1d20ff', fontSize:'25px' }}>Empatia</span>
                          <br />Nossa empresa ?? uma empresa totalmente voltada ?? pessoas desde o princ??pio. Nos preocupamos com seus sonhos, projetos e metas e buscamos realizar tudo isso da melhor forma poss??vel
                          indicando o caminho e seguindo seus passos at?? que possa caminhar sozinho.
                        </p>

                        <br /><p className="ID_text">
                          <span style={{ color: '#1d20ff', fontSize:'25px' }}>Compromisso</span>
                          <br />Sempre que nos comprometemos com um projeto, seja ele desafiador ou n??o, nos dedicamos compromissadamente a eles at?? que sejam conclu??dos com excel??ncia e satisfa????o.
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
            <div className="about__info__item ">
              <h1 className="about__info__heading">Nossas Habilidades</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={['HTML', 'CSS', 'REACT', 'NEXT']}
              />
              <AboutInfoItem
                title="BackEnd"
                items={['JavaScript','Node', 'Express']}
              />
              <AboutInfoItem
                title="Design"
                items={['PhotoScape','Photoshop', 'Canva', 'Figma','Tratamento de imagens']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
