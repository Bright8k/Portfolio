import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const Nav = styled.nav<{ $scrolled: boolean }>`
  width: 100%;
  background-color: ${({ $scrolled }) =>
    $scrolled ? 'rgba(254, 246, 249, 0.96)' : '#ffffff'};
  backdrop-filter: blur(12px);
  padding: 1rem 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${({ $scrolled }) =>
    $scrolled ? '0 2px 20px rgba(196, 119, 138, 0.12)' : '0 1px 0 rgba(237, 213, 223, 0.8)'};
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all 0.3s ease;
  box-sizing: border-box;
`;

const Logo = styled(Link)`
  font-family: var(--font-heading);
  font-size: 1.6rem;
  font-weight: 700;
  text-decoration: none;
  color: var(--color-primary);
  letter-spacing: 0.5px;

  span {
    color: var(--color-secondary);
  }

  &:hover {
    color: var(--color-primary-dark);
  }
`;

const Menu = styled.div<{ $open: boolean }>`
  display: flex;
  gap: 0.25rem;
  align-items: center;

  @media (max-width: 768px) {
    position: absolute;
    top: 68px;
    left: 0;
    right: 0;
    flex-direction: column;
    background-color: #ffffff;
    padding: 1.25rem 1.5rem;
    border-top: 1px solid var(--color-border);
    box-shadow: var(--shadow-md);
    display: ${({ $open }) => ($open ? 'flex' : 'none')};
    gap: 0.5rem;
  }
`;

const MenuItem = styled(Link)<{ $active: boolean }>`
  text-decoration: none;
  color: ${({ $active }) => ($active ? 'var(--color-primary)' : 'var(--color-text-light)')};
  font-family: var(--font-body);
  font-weight: ${({ $active }) => ($active ? '700' : '600')};
  font-size: 0.95rem;
  padding: 0.45rem 1.1rem;
  border-radius: var(--radius-pill);
  background-color: ${({ $active }) => ($active ? 'var(--color-accent)' : 'transparent')};
  transition: all 0.2s ease;
  letter-spacing: 0.3px;

  &:hover {
    color: var(--color-primary);
    background-color: var(--color-accent);
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 0.7rem 1.5rem;
  }
`;

const Toggle = styled.button`
  display: none;
  background: none;
  border: 2px solid var(--color-border);
  border-radius: var(--radius-sm);
  font-size: 1.2rem;
  padding: 0.3rem 0.65rem;
  color: var(--color-primary);
  transition: all 0.2s ease;
  line-height: 1;

  &:hover {
    background-color: var(--color-accent);
    border-color: var(--color-primary-light);
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
