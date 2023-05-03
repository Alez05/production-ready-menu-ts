import { TLabelType } from './label.type';
import styled from 'styled-components';

export const SLabel = styled.label<TLabelType>`
  display: flex;
  position: fixed;
  inset: 0 0 0 0;
  cursor: pointer;
`;

export const SLabelContent = styled.label<TLabelType>`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 1rem;
  height: 60px;
  border: none;
`;
