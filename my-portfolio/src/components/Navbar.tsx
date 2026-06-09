import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const Nav = styled.nav<{ $scrolled: boolean }>`
  width: 100%;
  background-color: ${({ $scrolled }) =>
    $scrolled ? 'rgba(10, 8, 7, 0.97)' : 'rgba(10, 8, 7, 0.92)'};
  backdrop-filter: blur(16px);
  padding: 1rem 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ $scrolled }) =>
    $scrolled ? 'rgba(201, 168, 76, 0.22)' : 'rgba(201, 168, 76, 0.08)'};
  box-shadow: ${({ $scrolled }) =>
    $scrolled ? '0 4px 40px rgba(0, 0, 0, 0.7)' : 'none'};
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all 0.3s ease;
  box-sizing: border-box;
`;

const Logo = styled(Link)`
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  color: var(--color-primary);
  letter-spacing: 1px;

  span {
    color: var(--color-primary-light);
  }

  &:hover {
    color: var(--color-primary-light);
  }
`;

const Menu = styled.div<{ $open: boolean }>`
  display: flex;
  gap: 0.25rem;
  align-items: center;

  @media (max-width: 768px) {
    position: absolute;
    top: 62px;
    left: 0;
    right: 0;
    flex-direction: column;
    background-color: rgba(10, 8, 7, 0.98);
    backdrop-filter: blur(16px);
    padding: 1.25rem 1.5rem;
    border-bottom: 1px solid rgba(201, 168, 76, 0.15);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.8);
    display: ${({ $open }) => ($open ? 'flex' : 'none')};
    gap: 0.4rem;
  }
`;

const MenuItem = styled(Link)<{ $active: boolean }>`
  text-decoration: none;
  color: ${({ $active }) => ($active ? 'var(--color-primary)' : 'var(--color-text-light)')};
  font-family: var(--font-body);
  font-weight: ${({ $active }) => ($active ? '600' : '400')};
  font-size: 0.875rem;
  padding: 0.4rem 1rem;
  border-radius: 4px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  background-color: ${({ $active }) => ($active ? 'rgba(201, 168, 76, 0.1)' : 'transparent')};
  border: 1px solid ${({ $active }) => ($active ? 'rgba(201, 168, 76, 0.25)' : 'transparent')};
  transition: all 0.2s ease;

  &:hover {
    color: var(--color-primary);
    background-color: rgba(201, 168, 76, 0.08);
    border-color: rgba(201, 168, 76, 0.18);
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 0.65rem 1.5rem;
  }
`;

const Toggle = styled.button`
  display: none;
  background: none;
  border: 1px solid rgba(201, 168, 76, 0.3);
  border-radius: var(--radius-sm);
  font-size: 1.1rem;
  padding: 0.3rem 0.65rem;
  color: var(--color-primary);
  transition: all 0.2s ease;
  line-height: 1;

  &:hover {
    background-color: rgba(201, 168, 76, 0.1);
    border-color: rgba(201, 168, 76, 0.5);
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <Nav $scrolled={scrolled}>
      <Logo to="/">
        Daniel Albright<span>.</span>
      </Logo>
      <Toggle onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        {menuOpen ? '✕' : '☰'}
      </Toggle>
      <Menu $open={menuOpen}>
        <MenuItem to="/" $active={location.pathname === '/'}>Home</MenuItem>
        <MenuItem to="/about" $active={location.pathname === '/about'}>About</MenuItem>
        <MenuItem to="/projects" $active={location.pathname === '/projects'}>Portfolio</MenuItem>
        <MenuItem to="/contact" $active={location.pathname === '/contact'}>Contact</MenuItem>
      </Menu>
    </Nav>
  );
};

export default Navbar;
