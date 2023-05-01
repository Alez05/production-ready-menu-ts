import { Input } from '..';
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
      <S.Label0 htmlFor='toggle'></S.Label0>
      <S.Nav>
        <div>
          <Input
            id='toggle1'
            name='toggle'
            type='radio'
          />
          <S.Label1 htmlFor='toggle1'>Cars</S.Label1>
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
          <S.Label1 htmlFor='toggle2'>Parts</S.Label1>
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
