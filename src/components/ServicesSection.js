import React from 'react';
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="O que vamos fazer por você" heading="Serviços" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="web design"
            desc="Fazemos o design ui / ux que ajuda o site a ter um visual único."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="web dev"
            desc="Também desenvolvemos os sites. Criamos um site de alto desempenho com velocidade extremamente rápida."
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="social media"
            desc="Admininstração e marketing do conteúdo do site."
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
