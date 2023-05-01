import { TLabelType } from './label.type';
import { SLabel, SLabelContent } from './label.style';

export const Label = ({ htmlFor }: TLabelType) => {
  return (
    <>
      <SLabel htmlFor={htmlFor} />
      <SLabelContent htmlFor={htmlFor} />
    </>
  );
};
