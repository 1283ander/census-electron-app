import React from 'react';
import styled from 'styled-components';
import { colors, typography } from '../designTokens';

const Nav = styled.nav`
  width: 100%;
  height: 60px;
  background-color: ${colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  color: ${colors.background};
  font-family: ${typography.fontFamily};
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: ${colors.background};
  font-size: 1em;
  font-family: ${typography.fontFamily};
  cursor: pointer;

  &:hover {
    color: ${colors.secondary};
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo>CensusApp</Logo>
      <NavLinks>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#data">Data</NavLink>
        <NavLink href="#maps">Maps</NavLink>
        <NavLink href="#about">About</NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
