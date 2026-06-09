import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const Nav = styled.nav<{ $scrolled: boolean }>`
  width: 100%;
  background-color: ${({ $scrolled }) =>
    $scrolled ? 'rgba(8, 9, 15, 0.97)' : 'rgba(8, 9, 15, 0.88)'};
  backdrop-filter: blur(20px);
  padding: 1.1rem 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ $scrolled }) =>
    $scrolled ? 'rgba(200, 171, 120, 0.18)' : 'rgba(200, 171, 120, 0.06)'};
  box-shadow: ${({ $scrolled }) =>
    $scrolled ? '0 4px 40px rgba(0, 0, 0, 0.6)' : 'none'};
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all 0.35s ease;
  box-sizing: border-box;
`;

const Logo = styled(Link)`
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 400;
  font-style: italic;
  text-decoration: none;
  color: var(--color-primary);
  letter-spacing: 0.5px;

  span {
    font-style: normal;
    color: var(--color-primary-light);
    opacity: 0.7;
  }

  &:hover {
    color: var(--color-primary-light);
  }
`;

const Menu = styled.div<{ $open: boolean }>`
  display: flex;
  gap: 0.15rem;
  align-items: center;

  @media (max-width: 768px) {
    position: absolute;
    top: 62px;
    left: 0;
    right: 0;
    flex-direction: column;
    background-color: rgba(8, 9, 15, 0.98);
    backdrop-filter: blur(20px);
    padding: 1.25rem 1.5rem;
    border-bottom: 1px solid var(--color-border);
    box-shadow: 0 16px 50px rgba(0, 0, 0, 0.8);
    display: ${({ $open }) => ($open ? 'flex' : 'none')};
    gap: 0.25rem;
  }
`;

const MenuItem = styled(Link)<{ $active: boolean }>`
  text-decoration: none;
  color: ${({ $active }) => ($active ? 'var(--color-primary)' : 'var(--color-text-light)')};
  font-family: var(--font-body);
  font-weight: ${({ $active }) => ($active ? '600' : '400')};
  font-size: 0.75rem;
  padding: 0.45rem 1rem;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  position: relative;
  transition: color 0.2s ease, background-color 0.2s ease;
  background-color: ${({ $active }) => ($active ? 'rgba(200, 171, 120, 0.08)' : 'transparent')};

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 1rem;
    right: 1rem;
    height: 1px;
    background-color: var(--color-primary);
    opacity: ${({ $active }) => ($active ? '0.5' : '0')};
    transition: opacity 0.2s ease;
  }

  &:hover {
    color: var(--color-primary);
    background-color: rgba(200, 171, 120, 0.06);

    &::after {
      opacity: 0.3;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 0.7rem 1.5rem;

    &::after {
      display: none;
    }
  }
`;

const Toggle = styled.button`
  display: none;
  background: none;
  border: 1px solid rgba(200, 171, 120, 0.2);
  border-radius: var(--radius-sm);
  font-size: 1.1rem;
  padding: 0.3rem 0.65rem;
  color: var(--color-text-light);
  transition: all 0.2s ease;
  line-height: 1;

  &:hover {
    border-color: rgba(200, 171, 120, 0.4);
    color: var(--color-primary);
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
