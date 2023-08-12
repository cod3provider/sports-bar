import styled, {css} from "styled-components/macro";
import Button from "../Button/Button.jsx";
import { TbMenu2 } from "react-icons/tb";
// import {Link} from "react-router-dom";

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const BurgerButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 32px;
  height: 32px;
  background-color: transparent;
  border: none;
`

export const BurgerIcon = styled(TbMenu2)`
  width: 32px;
  height: 32px;
  background-color: #F3E5CD;
  border-radius: 10px;
`

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
    background-color: #BBAFB3;
    border-radius: 10px;
  }
`

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const LinkNav = styled.a`
  color: #504C4C;
  font-family: 'Varela Round', sans-serif;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 114.286% */
`
