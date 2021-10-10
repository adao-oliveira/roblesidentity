import React from 'react';
import styled from 'styled-components';
import { MdEmail } from 'react-icons/md';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import ContactForm from './ContactForm';
import ContactInfoItem from './ContactInfoItem';

const ContactSectionStyle = styled.div`
h2{
  text-align: center;
  font-size: 30px;
}
  padding: 10rem 0;
  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }
  .contactSection__wrapper::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    max-width: 500px;
  }
  .right {
    max-width: 500px;
    width: 100%;
    border-radius: 12px;
    /* padding-left: 3rem; */
  }
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
      padding: 4rem 2rem 2rem 2rem;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;

export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className="container">
        <h2>Entre em contato 😉</h2>
        <div className="contactSection__wrapper">
          <div className="left">
            <a href="https://www.instagram.com/roblesidentity/"><ContactInfoItem icon={<FaInstagram />} text="@roblesidentity" /></a>
            <a href="https://www.facebook.com/"><ContactInfoItem icon={<FaFacebook />} text="roblesidentity" /></a>
            <ContactInfoItem icon={<MdEmail />} text="roblesidentity@outlook.com" />
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}
