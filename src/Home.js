import React from 'react'

export const Home = () => (
  <>
    <main>
      <div className="text-center -mb-10">
        <h2 className="text-white">Somos a <h2 style={{ color: 'rgb(231, 28, 147)', display: 'inline', fontSize:'30px'}}>ROBLES IDENTITY</h2></h2>
      </div>
      <div className="cards-container">
        <div className="card-left">
          <img src="https://res.cloudinary.com/robles-identity/image/upload/v1628705467/Desenv_g3im7p.jpg" />
        </div>
        <div className="card-right">
          <div className="Sobre_Text text-white">
            <p>
              Origem do nome da empresa: Nosso intuito desde o início foi juntar nossas habilidades para criar algo inovador que ajudasse as empresas e seus projetos a alavancarem de forma única. O que define uma empresa com toda certeza é a sua identidade, e uma identidade é formada por características visuais e internas, princípios e valores, por esse motivo escolhemos o sobrenome "Robles" da Juliana, a pessoa responsável pela idéia da empresa e pela parte visual da empresa e acrescentamos o "Identity" que traduzindo do inglês para o português é "Identidade".
            </p>

            <p>
              Nossa Proposta: A base do crescimento ou a realização de um projeto é o reconhecimento. Para ser reconhecido, primeiro você precisa ser lembrado visualmente, para isso na criação de um projeto as empresas renomadas estabelecem cores padrões que retratam seus valores, princípios e símbolos, que juntos formam toda a estrutura da sua logotipo\logomarca por exemplo.
            </p>

            <p>
              Sabemos que só cores, símbolos e logotipos não é o suficiente para alavancar uma empresa, por isso, é importante a visibilidade no maior meio de comunicação que existe, a INTERNET, para isso nós contamos com o nosso programador e desenvolvedor de sites Adão Oliveira, para desenvolver do zero o site que irá promover a sua empresa e juntamente com a parte visual irão trazer a visibilidade da mesma.
            </p>

            <p>
              Para concluir e ter a identidade da sua empresa formada além desses pontos anteriores, é necessário a formação dos princípios e valores que definem a proposta da mesma. É necessário parar, pensar no que a sua empresa oferece, acrescentar oque defende, o seu foco principal como base e atribuir à características de um caráter.
            </p>

            <p>
              Princípios, valores, cores, símbolos e a visibilidade ampla atribuídas, pronto! A empresa irá ter sua identidade formada e um sonho se tornando de fato realidade.
            </p>

            <p>
              Nosso foco é tirar seu projeto do papel e alavancar suas idéias.
            </p>
          </div>
          <div className="flex justify-center pb-10">
            <a href="/NossoID">
              <button type="button" className="btn mt-4 text-white font-semibold">Saiba mais sobre nosso ID</button>
            </a>
          </div>
        </div>
      </div>
    </main>

    <style jsx>{`

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
  border-right: 1px solid rgb(231, 28, 147);
}

.card-right{
  border-left: 1px solid rgb(231, 28, 147);
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

  .btn{
    background-color: #0700e0;
  }

    `}</style>
  </>
)
