import styled from "styled-components/macro";
import Button from "../Button/Button.jsx";
import {FooterText} from "../../../layout/Footer/Footer.styled.js";

export const StyledSubscribeForm = styled.form`
  display: flex;
  gap: 8px;
  width: 500px;
  align-items: flex-end;
  
  @media (width < 768px) {
    width: 320px;
    flex-direction: column;
  }
  
  @media (768px <= width < 1440px) {
    flex-direction: column;
    width: 278px;
    margin-top: 12px;
  }
`

export const FormWrap = styled.div`
  width: 320px;
  
  @media (768px <= width) {
    width: 278px;
  }
  
  @media (1440px <= width) {
    width: 500px;
  }
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
  
  @media (1440px <= width) {
    width: 320px;
  }
`

export const SubcsribeFormTitle = styled(FooterText)`
  margin-bottom: 8px;
  color: #504C4C;
  
  @media (768px <= width) {
    text-align: start;
  }
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

  @media (1440px <= width) {
    width: 172px;
    height: 58px;
    font-size: 20px;
  }
`
