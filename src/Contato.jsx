import React from 'react';
import emailjs from "emailjs-com";

function sendEmailContato(e) {
  e.preventDefault();

  emailjs.sendForm('default_service', 'template_e1l0srj', e.target, 'user_MItfXJG0w5itx4lmcFISX')
    .then((result) => {
      alert("E-mail enviado com sucesso");
    }, (error) => {
      alert("Ocorreu um erro inesperado, verifique os dados e tente novamente!");
    });
  e.target.reset()
}

export const Contato = () => {
  return (
    <>
      <section className="form-section">
        <h1 className="mt-4">Entre em contato 😉</h1>

        <div className="form-wrapper">
          <form onSubmit={sendEmailContato}>
            <div className="input-block">
              <label htmlFor='for'>Nome completo</label>
              <input type='nome' name="from_name" id="from_name" required />
            </div>
            <div className="input-block">
              <label htmlFor='for'>Seu melhor e-mail</label>
              <input type="email" name="email" id="email" required />
            </div>
            <div className="input-block">
              <label htmlFor='for'>Número para contato</label>
              <input type="tell" name="telefone" id="telefone" maxLength="11" onkeypress="mascara(this)" required />
            </div>
            <div className="input-block">
              <label htmlFor='for'>Assunto...</label>
              <textarea type='assunto' className="form-control" rows="6" name="message" id="message" required />
            </div>
            <button type='submit' className="btn btn-enviar">Enviar Mensagem</button>
          </form>
        </div>
      </section>

      <ul className="squares"></ul>

      <style jsx>{`
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(0, #120c56, #000000);
    padding-bottom: 50px;
  }

  .AvaliacaoStyle {
    text-align: center;
  }
  
  h1 {
    margin-top: 40px;
    color: #fff;
    font-size: 30px;
    text-align: center;
  }
  
  .form-wrapper form {
    margin: 20px 0;
    background-color: #fff;
    padding: 30px 25px;
    border-radius: 5px;
  }

  .ComentarioAvaliacao{
    margin: 20px 0;
    padding: 0 25px;
    border-radius: 5px;
  }

  .AvaliacaoStyle .input-block input{
    width: 100%;
    margin-top: 8px;
    padding: 7px;
    font-family: 'theboldfont';
    font-size: 16px;
    color: #1d20ff;
    outline-color: #1d20ff;
    height: 50px;
    border: none;
    border-radius: 5px;
    background: #ffffff;
    box-shadow: inset 9px 9px 19px #d9d9d9, inset -9px -9px 19px #ffffff;
  }
  
  .form-wrapper form .input-block {
    margin-bottom: 20px;
  }
  
  .form-wrapper form .input-block label {
    font-size: 14px;
    color: #111;
  }
  
  .form-wrapper form .input-block input {
    width: 100%;
    margin-top: 8px;
    padding: 7px;
    font-size: 16px;
    color: #1d20ff;
    outline-color: #1d20ff;
    height: 50px;
    border: none;
    border-radius: 5px;
    background: #ffffff;
    box-shadow: inset 9px 9px 19px #d9d9d9, inset -9px -9px 19px #ffffff;
  }

  textarea {
    min-width: 30vw;
    margin: 10px auto;
    padding: 20px;
    border-radius: 5px;
    outline-color: #1d20ff;
    background: #ffffff;
    box-shadow: inset 9px 9px 19px #d9d9d9, inset -9px -9px 19px #ffffff;
  }
  
.btn-enviar {
    display: block;
    min-width: 150px;
    border: none;
    background-color: #1d20ff;
    color: #fff;
    border-radius: 25px;
    margin: auto;
    padding: 7px;
  }

.btn-enviar:hover {
    background-color: #ff65c3;
  }

`}</style>

    </>
  )
}