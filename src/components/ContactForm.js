import React, { useState } from 'react';
import styled from 'styled-components';
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


const FormStyle = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--white);
    background-color: var(--deep-dark);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type='submit'] {
    background-color: var(--gray-1);
    color: var(--white);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
`;

export default function ContactForm() {
  return (
    <>
      <FormStyle>
        <form onSubmit={sendEmailContato}>
          <div className="form-group">
            <label htmlFor="name">
              Nome completo
              <input
                type="text"
                id="from_name"
                name="from_name"
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="email">
              Seu melhor e-mail
              <input
                type="email"
                id="email"
                name="email"
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="telefone">
              Número para contato
              <input
                type="number"
                id="telefone"
                name="telefone"
                maxLength="11"
                onkeypress="mascara(this)"
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="message">
              Assunto...
              <textarea
                type="text"
                id="message"
                name="message"
              />
            </label>
          </div>
          <div className="col text-center">
            <button type="submit">Enviar Mensagem</button>
          </div>
        </form>
      </FormStyle>
    </>
  );
}
