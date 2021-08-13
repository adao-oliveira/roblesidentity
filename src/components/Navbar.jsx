import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import { Link } from "react-router-dom";


const Nav = styled.nav`
  position: fixed !important;
  background-color: #000;
  width: 100%;
  height: 120px;
  border-bottom: 2px solid #0700e0;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
`

const Navbar = () => {
  return (
    <Nav>
      {/* DESKTOP */}
      <div className="zoom">
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
          <img src="https://res.cloudinary.com/robles-identity/image/upload/v1627494988/1627494925392_uxgjwy.png" className="logo" alt="Robles Identity"
            style={{
              marginLeft: '-5px',
              height: "110px",
              marginTop: '8px'
            }}
          />
        </Link>
      </div>
      {/* MOBILE */}
      <div className="zoom">
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
          <img src="https://res.cloudinary.com/robles-identity/image/upload/v1627494988/1627494925392_uxgjwy.png" className="logo" alt="Robles Identity"
            style={{
              marginLeft: '-5px',
              height: "100px",
              marginTop: '8px',
              display: "none"
            }}
          />
        </Link>
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar