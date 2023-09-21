import styled from "styled-components/macro";
import Button from "../Button/Button.jsx";
import {FooterText} from "../../../layout/Footer/Footer.styled.js";

export const StyledSubscribeForm = styled.form`
  display: flex;
  gap: 8px;
  width: 320px;
  
  @media (width < 1280px) {
    flex-direction: column;
  }
`

export const FormWrap = styled.div`
  width: 320px;
`

export const SubscribeInput = styled.input`
  padding: 12px 12px;
  width: 100%;
  
  font-family: 'Varela', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.14;
  color: #7C7777;
  border: 1px solid #5B5858;
  border-radius: 10px;
`

export const FooterFormTitle = styled(FooterText)`
  margin-bottom: 8px;
  color: #504C4C;
`

export const SubscribeButton = styled(Button)`
  width: 100%;
  padding: 8px 24px;
  color: #7C7777;
  text-align: center;
  font-family: 'Varela', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  border-radius: 10px;
  border: none;
  background: #FFE380;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`
