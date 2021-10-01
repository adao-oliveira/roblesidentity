import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Ul = styled.ul`
  list-style: none;
  margin-top: 25px;
  display: flex;
  color: #fff;
  flex-flow: row nowrap;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 20px;
  li {
    padding: 18px 10px;
  }
  li:hover {
    color: #0700e0;
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
      <Link to="/" style={{color: '#fff', textDecoration: 'none'}}><li>Home</li></Link>
      <Link to="/NossoID" style={{color: '#fff', textDecoration: 'none'}}><li>Nosso ID</li></Link>
      <Link to="/contato" style={{color: '#fff', textDecoration: 'none'}}><li>Contato</li></Link>
      <Link to="/servicos" style={{color: '#fff', textDecoration: 'none'}}><li>Nossos serviços</li></Link>
      <Link to="/Feedback" style={{color: '#fff', textDecoration: 'none'}}><li>Feedback</li></Link>
    </Ul>
  )
}

export default RightNav