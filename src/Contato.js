import React from 'react'

export const Contato = () => (
  <div>
    <main>
      {/* <!--===== CONTATO =====--> */}
      <section className="contact section" id="contact">
        <h2 className="section-title">Contato</h2>

        <div className="contact__container bd-grid">
          <div className="contact__info">
            <h3 className="contact__subtitle">EMAIL</h3>
            <span className="contact__text">exemplo.gmail.com</span>
          </div>

          <form action="" className="contact__form">
            <div className="contact__inputs">
              <input type="text" placeholder="Nome" className="contact__input" />
              <input type="mail" placeholder="E-mail" className="contact__input" />
            </div>

            <textarea placeholder="Mensagem..." name="" id="" cols="0" rows="10" className="contact__input"></textarea>

            <input type="submit" value="Enviar" className="contact__button" style={{ backgroundColor: '#1d20ff' }} />
          </form>
        </div>
      </section>
    </main>
  </div>
)
