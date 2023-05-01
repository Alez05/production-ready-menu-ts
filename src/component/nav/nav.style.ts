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

export type TLabelType = {
  for: string;
};

export const Label0 = styled.label`
  /* border: 10px solid green; */
  position: fixed;
  inset: 0 0 0 0;
  /* background-color: cyan; */
  cursor: pointer;
`;

export const Input1 = styled.input`
  display: none;
`;

export const Label1 = styled.label`
  display: block;
  cursor: pointer;
  padding: 0 1rem;
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
