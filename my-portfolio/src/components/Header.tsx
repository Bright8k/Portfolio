
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  padding: 1rem 2rem;
  background-color: #007BFF;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  color: white;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: bold;

  &:hover {
    color: #ffd700;
  }
`;

const Header = () => (
  <HeaderContainer>
    <h1>My Portfolio</h1>
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </Nav>
  </HeaderContainer>
);

export default Header;