import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

export const Home = () => (
  <>
    <main>
      <div className="text-center -mb-10">
        <ScrollAnimation animateIn='animate__zoomIn'>
          <h2 className="text-white" style={{fontSize:'20px'}}>Somos a
            <h2 style={{ color: '#ff65c3', display: 'inline', fontSize: '30px' }}> ROBLES IDENTITY</h2>
          </h2>
        </ScrollAnimation>
      </div>
      <div className="cards-container">
        <div className="card-left">
          <img src="https://res.cloudinary.com/robles-identity/image/upload/v1628705467/Desenv_g3im7p.jpg" />
        </div>
        <div className="card-right">
          <div className="Sobre_Text text-white">
            <ScrollAnimation animateIn='animate__lightSpeedInLeft'>
              <h1 style={{ color: '#ff65c3', fontSize: '30px' }}>ORIGEM DO NOME</h1>
            </ScrollAnimation>
            <ScrollAnimation animateIn='animate__backInLeft'>
              <p>
                Nosso intuito desde o início foi juntar nossas habilidades para criar algo inovador que ajudasse as empresas e seus projetos a alavancarem de forma única.
                O que define uma empresa com toda certeza é a sua identidade, e uma identidade é formada por características visuais e internas, princípios e valores, por esse motivo escolhemos
                o sobrenome<p style={{ color: '#ff65c3', display: 'inline'}}> "ROBLES"</p> da Juliana,
                a pessoa responsável pela idéia da empresa e pela parte visual da empresa e acrescentamos o <p style={{ color: '#ff65c3', display: 'inline'}}> "IDENTITY"</p> que traduzindo 
                do inglês para o português é <p style={{ color: '#ff65c3', display: 'inline'}}> "IDENTIDADE"</p>.
              </p>
            </ScrollAnimation>

            <ScrollAnimation animateIn='animate__lightSpeedInLeft'>
              <h1 style={{ color: '#ff65c3', fontSize: '30px' }}>NOSSA PROPOSTA</h1>
            </ScrollAnimation>

            <ScrollAnimation animateIn='animate__backInLeft'>
              <p>
                A base do crescimento ou a realização de um projeto é o reconhecimento. Para ser reconhecido, primeiro você precisa ser lembrado visualmente,
                para isso na criação de um projeto as empresas renomadas estabelecem cores padrões que retratam seus valores, princípios e símbolos,
                que juntos formam toda a estrutura da sua logotipo/logomarca por exemplo.
              </p>

              <p>
                Sabemos que só cores, símbolos e logotipos não é o suficiente para alavancar uma empresa,
                por isso, é importante a visibilidade no maior meio de comunicação que existe, a <p style={{ color: '#ff65c3', display: 'inline'}}> INTERNET</p>, para isso nós contamos com o nosso programador e desenvolvedor de sites Adão Oliveira,
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
              <h1 style={{ color: '#ff65c3' }}>
                NOSSO FOCO É TIRAR SEU PROJETO DO PAPEL E ALAVANCAR SUAS IDÉIAS
              </h1>
            </ScrollAnimation>
          </div>
          <div className="detalhe flex justify-center pb-10">
            <a href="/NossoID">
              <button type="button" className="btn mt-4 text-white font-semibold" style={{backgroundColor:'#ff65c3'}}>&#123; Saiba mais sobre nosso ID &#125;</button>
            </a>
          </div>
        </div>
      </div>
    </main>

    <style jsx>{`

main {
  background: linear-gradient(0, #120c56, #000000);
}

.cards-container {
  text-align: center;
  margin-top: 100px;
  margin-bottom: 200px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(2, 1fr);
}

.card-left img , .card-right img {
  display: block;
  padding: 0 30px 30px 30px;
}

.card-right p {
  width: 80%;
  margin: 10px auto 20px auto;
  font-size: 18px;
}

..card-right {
  padding: 20px;
}

.card-left {
  border-right: 1px solid #ff65c3;
}

.card-right{
  border-left: 1px solid #ff65c3;
}


@media (min-width:0px) and (max-width:799px){
  .cards-container {
    display: block;
  }
  
.card-left,.card-right{
  border:none;
}
  .card-left img , .card-right img {
    width: 100%;
  }
  .card-left p , .card-right p {
    width: 90%;
    margin: 10px auto 20px auto;
  }

    `}</style>
  </>
)
