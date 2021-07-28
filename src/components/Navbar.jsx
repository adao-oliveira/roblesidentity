import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  background-color: #000;
  width: 100%;
  height: 120px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  color:
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <a>
          <img src="https://res.cloudinary.com/robles-identity/image/upload/v1627441012/1627440484432_copy_400x300_pskltw.png" className="logo" alt="Robles Identity"
            style={{
              marginLeft: '-45px',
              marginTop: '-80px'
            }}
          />
        </a>
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar