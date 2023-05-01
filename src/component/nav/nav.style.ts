import styled from 'styled-components';

export const NavContainer = styled.header`
  position: relative;
  background: #50306a;
  height: 60px;
  width: 100%;
`;

export const Nav = styled.nav`
  display: inline-flex;
  /* flex-direction: column; */
  border: 1px solid #ccc;
  position: relative;
  height: 60px;
`;

export const NavList = styled.div`
  display: none;
  position: absolute;
  top: 60px;
  left: 0;
  background-color: #000;
`;

export const NavItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NavLink = styled.a`
  /* border: 3px dotted red; */
  padding: 0.5rem;
  color: white;
`;
