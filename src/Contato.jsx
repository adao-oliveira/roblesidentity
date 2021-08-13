import React from 'react';
import emailjs from "emailjs-com";
import { Rating } from 'semantic-ui-react'


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

function sendEmailAvaliacao(e) {
  e.preventDefault();

  emailjs.sendForm('default_service', 'template_ggs0fdp', e.target, 'user_MItfXJG0w5itx4lmcFISX')
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
            <button type='submit' className="btn-enviar">Enviar Mensagem</button>
          </form>
        </div>

        <form onSubmit={sendEmailAvaliacao}>
          <h1> Já nos conhece? Avalia-nos 💕</h1>
          <div className="AvaliacaoStyle">
            <div name="message" id="message">
              <Rating icon='heart' defaultRating={2} maxRating={5} size='massive' />
            </div>
            <div className="input-block">
              <input type='nome' name="from_name" id="from_name" placeholder="Nome completo" required />
            </div>
            <div className="ComentarioAvaliacao">
              <textarea type='assunto' className="form-control" rows="6" name="message" id="message" placeholder="Deixe um comentário 💕" required />
            </div>
          </div>
          <button type='submit' className="btn-enviar mt-4">Enviar Avaliação</button>
        </form>

      </section>

      <ul className="squares"></ul>

      <style jsx>{`
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background:  linear-gradient( 45deg, red, blue );
    padding-bottom: 50px;
  }

  .AvaliacaoStyle {
    text-align: center;
  }
  
  h1 {
    margin-top: 40px;
    color: #fff;
    font-size: 20px;
    font-weight: 200;
    text-align: center;
    font-family: 'Courier New', Courier, monospace;
  }
  
  .form-wrapper form {
    margin: 20px 0;
    background-color: white;
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
    font-family: 'Courier New', Courier, monospace;
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
    font-family: 'Courier New', Courier, monospace;
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
    font-family: 'Courier New', Courier, monospace;
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
    color: white;
    border-radius: 25px;
    margin: auto;
    padding: 7px;
  }

.btn-enviar:hover {
    background-color: rgb(231, 28, 147);
  }

`}</style>

    </>
  )
}