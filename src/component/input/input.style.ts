import { TInputType } from './input.type';
import styled from 'styled-components';

export const SInput = styled.input<TInputType>`
  opacity: 0;
  visibility: hidden;
  position: fixed;
  top: -50px;

  &[id='toggle']:checked + label {
    display: none;
  }

  &:checked + label + div {
    display: block;
  }
`;
