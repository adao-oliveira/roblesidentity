import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

export const Servicos = () => (
  <div>
    <main className="l-main">
      {/* <!--===== SERVICOS =====--> */}

      <div className="fundo">
        {/* ADAO */}
        <section className="skills section" id="skills">
          <ScrollAnimation animateIn='afterAnimatedIn'>
            <h2 className="section-title text-white">Nossos Serviços</h2>
          </ScrollAnimation>
          <div className="skills__container bd-grid">
            <div className="skills__box">
              <h3 className="skills__subtitle">Desenvolvimento</h3>
              <span className="skills__name">Javascript<img src="https://img.icons8.com/nolan/48/javascript.png" /></span>
              <span className="skills__name">React.js<img src="https://img.icons8.com/nolan/48/react-native.png" /></span>
              <span className="skills__name">Next.js<img style={{ height: '48px' }} src="https://www.creative-tim.com/learning-lab/assets/images/nextjs.png" /></span>
            </div>

            <div className="skills__img">
              <img src="https://res.cloudinary.com/robles-identity/image/upload/v1627948326/PicsArt_08-02-08.51.10_atg8fd.png" alt="" />
            </div>
          </div>
        </section>
        {/* JULIANA */}
        <section className="skills section -mt-32" id="skills">
          <div className="skills__container bd-grid">
            <div className="skills__img ">
              <img src="https://res.cloudinary.com/robles-identity/image/upload/v1627949836/PicsArt_08-02-09.16.51_veqw2j.png" alt="" />
            </div>
            <div className="skills__box">
              <h3 className="skills__subtitle">Design</h3>
              <span className="skills__name">Photoshop<img src="https://img.icons8.com/nolan/48/adobe-photoshop.png" /></span>
              <span className="skills__name">PhotoScape<img style={{ height: '48px' }} src="https://img2.gratispng.com/20180404/pvw/kisspng-photoscape-image-editing-computer-software-photoscape-effects-5ac48dd55dcba3.7133507615228308053842.jpg" /></span>
              <span className="skills__name">Canva<img style={{ height: '48px' }} src="https://img.apksum.com/c0/com.canva.editor/2.76.0/icon.png" /></span>
            </div>

          </div>
        </section>
      </div>
    </main>
  </div>
)
