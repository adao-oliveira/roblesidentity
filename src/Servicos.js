import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

export const Servicos = () => (
  <>
    <div>
      <main className="l-main">
        {/* <!--===== SERVICOS =====--> */}

        <div className="fundo">
          {/* ADAO */}
          <section className="section">
            <ScrollAnimation animateIn='afterAnimatedIn'>
              <h2 className="section-title text-white">Nossos Serviços</h2>
            </ScrollAnimation>
            <div className="habilidades_container bd-grid">
              <div className="habilidades_box">
                <h3 className="habilidades_subtitle">Desenvolvimento</h3>
                <span className="habilidades_name">Javascript<img src="https://img.icons8.com/nolan/48/javascript.png" /></span>
                <span className="habilidades_name">React.js<img src="https://img.icons8.com/nolan/48/react-native.png" /></span>
                <span className="habilidades_name">Next.js<img style={{ height: '48px' }} src="https://www.creative-tim.com/learning-lab/assets/images/nextjs.png" /></span>
              </div>

              <div className="habilidades_img">
                <img src="https://res.cloudinary.com/robles-identity/image/upload/v1627948326/PicsArt_08-02-08.51.10_atg8fd.png" alt="" />
              </div>
            </div>
          </section>
          {/* JULIANA */}
          <section className="section -mt-32">
            <div className="habilidades_container bd-grid">
              <div className="habilidades_img ">
                <img src="https://res.cloudinary.com/robles-identity/image/upload/v1627949836/PicsArt_08-02-09.16.51_veqw2j.png" alt="" />
              </div>
              <div className="habilidades_box">
                <h3 className="habilidades_subtitle">Design</h3>
                <span className="habilidades_name">Photoshop<img src="https://img.icons8.com/nolan/48/adobe-photoshop.png" /></span>
                <span className="habilidades_name">PhotoScape<img style={{ height: '48px' }} src="https://img2.gratispng.com/20180404/pvw/kisspng-photoscape-image-editing-computer-software-photoscape-effects-5ac48dd55dcba3.7133507615228308053842.jpg" /></span>
                <span className="habilidades_name">Canva<img style={{ height: '48px' }} src="https://img.apksum.com/c0/com.canva.editor/2.76.0/icon.png" /></span>
              </div>

            </div>
          </section>
        </div>
      </main>
    </div>

    <style jsx>{`

.habilidades_container{
  row-gap: 2rem;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
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
  background-color: #FAFAFF;
  border-radius: .25rem;
}
.habilidades_img img{
  border-radius: .5rem;
}
`}</style>

  </>
)
