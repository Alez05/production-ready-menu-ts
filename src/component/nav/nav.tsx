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
        <S.NavLogo>
          <S.NavLogoSvg />
        </S.NavLogo>
        <div>
          <Input
            id='toggle1'
            name='toggle'
            type='radio'
          />
          <SLabelContent htmlFor='toggle1'>
            <h3>
              Used Cars
              <S.Caret />
            </h3>
          </SLabelContent>
          <S.NavList>
            <S.NavItem>
              <S.NavLink>Buy Used Car Parts</S.NavLink>
              <S.NavLink>Makes & Models</S.NavLink>
              <S.NavLink>Transmission & Fuels</S.NavLink>
              <S.NavLink>Body Shapes & Types</S.NavLink>
              <S.NavLink>Monthly Repayment</S.NavLink>
            </S.NavItem>
          </S.NavList>
        </div>
        <S.NavLink>
          <h3>Ways To Buy</h3>
        </S.NavLink>
        <S.NavLink>
          <h3>Car Finance</h3>
        </S.NavLink>
        <S.NavLink>
          <h3>Our Stores</h3>
        </S.NavLink>
        <S.NavLink>
          <h3>Part Exchange</h3>
        </S.NavLink>
        <div>
          <Input
            id='toggle2'
            name='toggle'
            type='radio'
          />
          <SLabelContent htmlFor='toggle2'>
            <h3>
              More
              <S.Caret />
            </h3>
          </SLabelContent>
          <S.NavList>
            <S.NavItem>
              <S.NavLink>Help & Support</S.NavLink>
              <S.NavLink>Service & MOTs</S.NavLink>
              <S.NavLink>Products</S.NavLink>
              <S.NavLink>CarShop Quality</S.NavLink>
              <S.NavLink>About Us</S.NavLink>
              <S.NavLink>Careers</S.NavLink>
              <S.NavLink>Latest News</S.NavLink>
            </S.NavItem>
          </S.NavList>
        </div>
      </S.Nav>
    </S.NavContainer>
  );
};

export { Nav };
