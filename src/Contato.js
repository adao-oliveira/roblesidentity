import React from 'react'

export const Contato = () => (
  <div>
    {/* <!--===== CONTATO =====--> */}
    <section class="form-section">

      <div class="form-wrapper">
        <form>
          <div class="input-block">
            <label for="login-email contact__subtitle">E-mail</label>
          </div>

          <div className="input-block">
            <input type="text" placeholder="Nome" />
            <input type="email" placeholder="E-mail" id="login-email" />
          </div>

          <textarea placeholder="Mensagem..." name="" id="" cols="50" rows="10" className=" input-block"></textarea>

          <button type="submit" class="btn-enviar">Enviar</button>
        </form>
      </div>
    </section>

    <ul class="squares"></ul>
  </div>
)
