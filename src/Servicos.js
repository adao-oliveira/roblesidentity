import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

export const Servicos = () => (
  <>
    <div>
      <main className="l-main">
        {/* <!--===== SERVICOS =====--> */}

        <div className="fundo">
          {/* ADAO */}
          <section className="habilidades section">
            <ScrollAnimation animateIn='afterAnimatedIn'>
              <h2 className="section-title text-white">Nossos Serviços</h2>
            </ScrollAnimation>
            <div className="habilidades_container bd-grid">
              <div className="habilidades_img mt-16">
                <img src="https://res.cloudinary.com/robles-identity/image/upload/v1627948326/PicsArt_08-02-08.51.10_atg8fd.png" alt="" />
              </div>
              <div className="habilidades_box mt-16">
                <h3 className="habilidades_subtitle d-none d-md-block">Desenvolvimento</h3>
                <h3 className="habilidades_subtitle -mt-28 d-lg-none">Desenvolvimento</h3>
                <span className="habilidades_name">Javascript<img style={{ height: '48px' }} src="https://img.icons8.com/nolan/48/javascript.png" /></span>
                <span className="habilidades_name">React.js<img style={{ height: '48px' }} src="https://img.icons8.com/nolan/48/react-native.png" /></span>
                <span className="habilidades_name">Next.js<img style={{ height: '48px' }} src="https://www.creative-tim.com/learning-lab/assets/images/nextjs.png" /></span>
                <span className="Habilidades_detalhes">
                  <h1 className="Aspas_Detalhe"></h1>
                  <h1 className="Habilidades_detalhes" style={{ color: '#1d20ff' }}>
                    Olá, meu nome é Adão Oliveira,
                    faço parte do desenvolvimento da Robles Identity que visa gerar identidade ao seu projeto ou empresa.
                    Tomo conta de toda a área de programação, técnica, domínio e hospedagem
                  </h1>
                </span>
              </div>
            </div>
          </section>
          {/* JULIANA */}
          <section className="habilidades section">
            <div className="habilidades_container bd-grid">
              <div className="habilidades_img">
                <img src="https://res.cloudinary.com/robles-identity/image/upload/v1627949836/PicsArt_08-02-09.16.51_veqw2j.png" alt="" />
              </div>
              <div className="habilidades_box -mt-16">
                <h3 className="habilidades_subtitle">Design</h3>
                <span className="habilidades_name">Photoshop<img style={{ height: '48px' }} src="https://img.icons8.com/nolan/48/adobe-photoshop.png" /></span>
                <span className="habilidades_name">PhotoScape<img style={{ height: '48px' }} src="https://upload.wikimedia.org/wikipedia/pt/8/83/Photoscape.png" /></span>
                <span className="habilidades_name">Canva<img style={{ height: '48px' }} src="https://img.apksum.com/c0/com.canva.editor/2.76.0/icon.png" /></span>
                <span className="Habilidades_detalhes">
                  <h1 className="Aspas_Detalhe"></h1>
                  <h1 className="Habilidades_detalhes" style={{ color: 'rgb(231, 28, 147)' }}>
                    Olá, meu nome é Juliana Robles,
                    faço parte do desenvolvimento da Robles Identity que visa gerar identidade ao seu projeto ou empresa.
                    Tomo conta de toda área de design, marketing, identidade visual e conteúdo.
                  </h1>
                </span>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>

    <style jsx>{`

.habilidades_container{
  row-gap: 2rem;
}

.habilidades_subtitle{
  color: #FAFAFF;
  margin-bottom: 1.5rem;
  font-size: 30px;
}
.habilidades_name{
  display: inline-block;
  font-size: .813rem;
  margin-right: 1rem;
  margin-bottom: 1.5rem;
  padding: .25rem .5rem;
  border-radius: .25rem;
}
.Habilidades_detalhes {
  margin-right: 1rem;
  margin-bottom: 1.5rem;
  padding: .25rem .5rem;
  border-radius: .25rem;
  width: 400px;
}
@media screen and (min-width: 768px){
  .Habilidades_detalhes{
    width: 33rem;
  }
.Aspas_Detalhe{
  content: "";
  display: block;
  width: 24px;
  height: 20px;
  margin-top: 15px;
  margin-bottom: 15px;
  padding-right: 25px;
  background-image: url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2224%22%20height%3D%2218%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M0%2013.481c0-2.34.611-4.761%201.833-7.263C3.056%203.716%204.733%201.643%206.865%200L11%202.689C9.726%204.382%208.777%206.093%208.152%207.824c-.624%201.73-.936%203.578-.936%205.545V18H0v-4.519zm13%200c0-2.34.611-4.761%201.833-7.263%201.223-2.502%202.9-4.575%205.032-6.218L24%202.689c-1.274%201.693-2.223%203.404-2.848%205.135-.624%201.73-.936%203.578-.936%205.545V18H13v-4.519z%22%20fill%3D%22%236163FF%22%20fill-rule%3D%22nonzero%22%2F%3E%3C%2Fsvg%3E);
  background-repeat: no-repeat;
}
.habilidades_img img{
  border-radius: .5rem;
}

    `}</style>
  </>
)
