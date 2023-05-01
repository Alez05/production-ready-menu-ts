import type { TInputType } from './input.type';
import { SInput } from './input.style';

export const Input = ({ checked, id, name, type }: TInputType) => {
  return (
    <SInput
      checked={checked}
      id={id}
      name={name}
      type={type}
    />
  );
};
