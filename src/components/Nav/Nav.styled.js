import { Link, NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components/macro';
import { TbMenu2 } from 'react-icons/tb';
import Button from '../common/Button/Button.jsx';
// import {Link} from "react-router-dom";

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BurgerButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 32px;
  height: 32px;
  background-color: transparent;
  border: none;
`;

export const BurgerIcon = styled(TbMenu2)`
  width: 32px;
  height: 32px;
  background-color: #f3e5cd;
  border-radius: 10px;
`;

export const MobileMenu = styled.div`
  display: none;

  &.open {
    position: absolute;
    top: 14px;
    right: 16px;
    display: flex;
    justify-content: center;
    padding: 50px;
    width: 215px;
    z-index: 101;
    background-color: #bbafb3;
    border-radius: 10px;
  }
`;

export const MobileNavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

  @media (960px <= width) {
    margin-right: 50px;
  }
`;

export const LinkNav = styled(NavLink)`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.2;
  color: #f7f2f2;
  transition: color 350ms linear;

  &:hover {
    color: #e2dbbe;
  }

  //&.active {
  //  color: rebeccapurple;
  //}
`;

export const MobileLinkNav = styled(Link)`
  color: #504c4c;
  font-family: 'Varela Round', sans-serif;
  font-size: 28px;
  font-weight: 400;
  line-height: 1.14;
`;
