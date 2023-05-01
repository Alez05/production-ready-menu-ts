import { Input } from '..';
import { SLabel, SLabelContent } from '../label/label.style';
import * as S from './nav.style';

const Nav = () => {
  return (
    <S.NavContainer>
      <Input
        id='toggle'
        name='toggle'
        type='radio'
        checked
      />
      <SLabel htmlFor='toggle'></SLabel>
      <S.Nav>
        <div>
          <Input
            id='toggle1'
            name='toggle'
            type='radio'
          />
          <SLabelContent htmlFor='toggle1'>Cars</SLabelContent>
          <S.NavList>
            <S.NavItem>
              <S.NavLink>ceva1</S.NavLink>
            </S.NavItem>
          </S.NavList>
        </div>
        <div>
          <Input
            id='toggle2'
            name='toggle'
            type='radio'
          />
          <SLabelContent htmlFor='toggle2'>Parts</SLabelContent>
          <S.NavList>
            <S.NavItem>
              <S.NavLink>ceva 2</S.NavLink>
            </S.NavItem>
          </S.NavList>
        </div>
      </S.Nav>
      <S.NavLink>mortii tei</S.NavLink>
    </S.NavContainer>
  );
};

export { Nav };
