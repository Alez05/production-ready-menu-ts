import styled from 'styled-components';

export const NavContainer = styled.header`
  position: relative;
  background: #cbd3b0;
  height: 60px;
  width: 100%;
`;

export const NavLogo = styled.div`
  display: flex;
  width: 200px;
  padding: 0px 1rem;
  position: absolute;
  height: 60px;
  left: 0;
`;

export const NavLogoSvg = styled.svg`
  background-image: url(/icon/logo.svg);
  position: absolute;
  background-repeat: no-repeat;
  left: 0px;
  width: 200px;
  height: 130px;
  top: -70px;
`;

export const Nav = styled.nav`
  display: flex;
  /* flex-direction: column; */
  /* border: 1px solid #ccc; */
  position: relative;
  height: 60px;
  justify-content: center;
`;

export const NavList = styled.div`
  display: none;
  position: absolute;
  top: 60px;
  background-color: #cbd3b0;
`;

export const NavItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NavLink = styled.a`
  padding: 0.5rem;
  color: #000;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: #fff;
  }
`;

export const Caret = styled.svg`
  width: 10px;
  height: 10px;
  margin-left: 0.5rem;
  fill: #000;
  transition: all 0.3s ease-in-out;
  background-image: url(/icon/caret.svg);
  background-repeat: no-repeat;
`;
