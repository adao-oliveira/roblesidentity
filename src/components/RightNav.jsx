import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Ul = styled.ul`
  list-style: none;
  margin-top: 25px;
  display: flex;
  color: #fff;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #000;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: -20px;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <Link to="/" style={{color: 'white', textDecoration: 'none'}}><li>Home</li></Link>
      <Link to="/NossoID" style={{color: 'white', textDecoration: 'none'}}><li>Nosso ID</li></Link>
      <Link to="/contato" style={{color: 'white', textDecoration: 'none'}}><li>Contato</li></Link>
      <Link to="/servicos" style={{color: 'white', textDecoration: 'none'}}><li>Nossos serviços</li></Link>
      <Link to="/Seuprojeto" style={{color: 'white', textDecoration: 'none'}}><li>Desenvolva seu projeto</li></Link>
    </Ul>
  )
}

export default RightNav