// src/components/Navbar.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  width: 100%;
  background-color: #ffffff;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #007acc;
`;

const Menu = styled.div<{ open: boolean }>`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    position: absolute;
    top: 60px;
    right: 2rem;
    flex-direction: column;
    background-color: #ffffff;
    padding: 1rem;
    border: 1px solid #ccc;
    display: ${({ open }) => (open ? 'flex' : 'none')};
  }
`;

const MenuItem = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: 500;

  &:hover {
    color: #007acc;
  }
`;

const Toggle = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Nav>
      <Logo to="/">Bright</Logo>
      <Toggle onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        ☰
      </Toggle>
      <Menu open={menuOpen}>
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/about">About</MenuItem>
        <MenuItem to="/projects">Projects</MenuItem>
        <MenuItem to="/contact">Contact</MenuItem>
      </Menu>
    </Nav>
  );
};

export default Navbar;
