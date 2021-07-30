import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

export const Servicos = () => (
  <div>
    <main className="l-main">
      {/* <!--===== SERVICOS =====--> */}

      <section className="skills section" id="skills">
        <ScrollAnimation animateIn='afterAnimatedIn'>
          <h2 className="section-title">Nossos Serviços</h2>
        </ScrollAnimation>
        <div className="skills__container bd-grid">
          <div className="skills__box">
            <h3 className="skills__subtitle">Desenvolvimento</h3>
            <span className="skills__name">Javascript</span>
            <span className="skills__name">React.js</span>
            <span className="skills__name">Next.js</span>

            <h3 className="skills__subtitle">Design</h3>
            <span className="skills__name">Figma</span>
            <span className="skills__name">Photoshop</span>
            <span className="skills__name">Adobe XD</span>
          </div>

          <div className="skills__img">
            <img src="https://res.cloudinary.com/robles-identity/image/upload/v1627599894/skill_l5bhft.jpg" alt="" />
          </div>
        </div>
      </section>


      {/* <!--===== CONTATO =====--> */}
      <section className="contact section" id="contact">
        <h2 className="section-title">Contato</h2>

        <div className="contact__container bd-grid">
          <div className="contact__info">
            <h3 className="contact__subtitle">EMAIL</h3>
            <span className="contact__text">exemplo.gmail.com</span>

            <h3 className="contact__subtitle">Telefone</h3>
            <span className="contact__text">(11) 99999999</span>
          </div>

          <form action="" className="contact__form">
            <div className="contact__inputs">
              <input type="text" placeholder="Nome" className="contact__input" />
              <input type="mail" placeholder="E-mail" className="contact__input" />
            </div>

            <textarea placeholder="Mensagem..." name="" id="" cols="0" rows="10" className="contact__input"></textarea>

            <input type="submit" value="Enviar" className="contact__button" style={{backgroundColor: '#1d20ff'}} />
          </form>
        </div>
      </section>
    </main>
  </div>
)
