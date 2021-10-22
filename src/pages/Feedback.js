import React from 'react'
import emailjs from "emailjs-com";
import { Rating } from 'semantic-ui-react'

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

export default function Feedback() {
  return (
  <>
    <div className="fundo">
      <section className="form-section">
        <h1> Já nos conhece? Avalie-nos 💕</h1>

        <div className="form-wrapper">
          <form onSubmit={sendEmailAvaliacao}>
            <div style={{ textAlign: 'center' }} name="message" id="message">
              <Rating icon='heart' defaultRating={2} maxRating={5} size='massive' />
            </div>
            <div className="input-block">
              <input type='nome' name="from_name" id="from_name" placeholder="Nome completo" required />
            </div>
            <div className="input-block">
              <textarea type='assunto' className="form-control" rows="6" name="message" id="message" placeholder="Deixe um comentário 💕" required />
            </div>
            <button type='submit' className="btn btn-enviar mt-4">Enviar Avaliação</button>
          </form>
        </div>
      </section>
    </div>
    <style jsx>{`

.fundo{
  width: 100%;
  height: 100%;
  background: linear-gradient(#120c56, #000000);
  margin-top: 12rem;
}

    section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-bottom: 50px;
    }
    
    h1 {
      padding-top: 40px;
      color: #fff;
      font-size: 30px;
      font-weight: 200;
      text-align: center;
    }
    
    .form-wrapper form {
      margin: 20px 0;
      background-color: #fff;
      padding: 30px 25px;
      border-radius: 5px;
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
      color: #fff;
    }

`}</style>

  </>
  );
}
