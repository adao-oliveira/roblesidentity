import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import { MdClose, MdMenu } from 'react-icons/md';

const NavStyles = styled.nav`
  border-bottom: 2px solid #0700e0;
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 20px;
  background: var(--dark-bg);
  ul {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: center;
    li {
      display: inline-block;
      border-radius: 8px;
      transition: 0.3s ease background-color;
      margin-top: 5%;
      &:hover {
        background-color: var(--deep-dark);
      }
    }
    a {
      display: inline-block;
      font-family: 'Roboto Condensed', sans-serif;
      padding: 1rem 2rem;
      font-size: 25px;
      color: var(--white);
      outline: none;
    }
    .active {
      color: var(--white);
    }
  }
  .mobile-menu-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;
    margin-top: 8%;
    * {
      pointer-events: none;
    }
  }
  .navItems .closeNavIcon {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    padding: 0;
    .hide-item {
      transform: translateY(calc(-100% - var(--top)));
    }
    .mobile-menu-icon {
      display: block;
    }
    .logo {
      width: 80%;
    }
    .navItems {
      --top: 1rem;
      transition: 0.3s ease transform;
      background-color: var(--deep-dark);
      padding: 2rem;
      width: 90%;
      max-width: 300px;
      border-radius: 12px;
      position: absolute;
      right: 1rem;
      top: var(--top);
      .closeNavIcon {
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        * {
          pointer-events: none;
        }
      }
      li {
        display: block;
        margin-bottom: 1rem;
      }
    }
  }
  .zoom img {
	-moz-transition: all 0.3s;
	-webkit-transition: all 0.3s;
	transition: all 0.3s;
}

.zoom:hover img {
	-moz-transform: scale(1.1);
	-webkit-transform: scale(1.1);
	transform: scale(1.1);
}
`;

export default function NavMenu() {
  const [showNav, setShowNav] = useState(false);
  return (
    <NavStyles>
      <div
        className="mobile-menu-icon"
        onClick={() => setShowNav(!showNav)}
        role="button"
        onKeyDown={() => setShowNav(!showNav)}
        tabIndex={0}
      >
        <MdMenu />
      </div>

      {/* DESKTOP */}
      <div className="zoom">
        <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
          <img src="https://res.cloudinary.com/robles-identity/image/upload/v1627494988/1627494925392_uxgjwy.png" className="logo" alt="Robles Identity"
            style={{
              marginTop: '8px'
            }}
          />
        </Link>
      </div>
      {/* MOBILE */}
      <div className="zoom">
        <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
          <img src="https://res.cloudinary.com/robles-identity/image/upload/v1627494988/1627494925392_uxgjwy.png" className="logo" alt="Robles Identity"
            style={{
              marginTop: '8px',
              display: "none"
            }}
          />
        </Link>
      </div>

      <ul className={!showNav ? 'navItems hide-item' : 'navItems'}>
        <div
          className="closeNavIcon"
          onClick={() => setShowNav(!showNav)}
          role="button"
          onKeyDown={() => setShowNav(!showNav)}
          tabIndex={0}
        >
          <MdClose />
        </div>
        <li>
          <NavLink
            to="/"
            exact
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Nosso ID
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Projetos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Contato
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/feedback"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Feedback
          </NavLink>
        </li>
      </ul>
    </NavStyles>
  );
}
