import styled from "styled-components/macro";
import Button from "../Button/Button.jsx";
import { TbMenu2 } from "react-icons/tb";

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
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: none;
`

export const BurgerIcon = styled(TbMenu2)`
  width: 32px;
  height: 32px;
  background-color: #F3E5CD;
  border-radius: 10px;
`
