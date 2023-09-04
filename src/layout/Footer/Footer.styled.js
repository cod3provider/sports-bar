import styled from "styled-components/macro";
import Button from "../../components/Button/Button.jsx";
import {Container} from "../../components/Container/Container.styled.js";

export const FooterContainer = styled(Container)`
  padding: 24px;
  display: flex;
  align-items: center;
  
  @media (width < 768px) {
    flex-direction: column;
    gap: 21px;
  }
  
  @media (768px < width) {
    justify-content: space-between;
  }
`

export const FooterBtn = styled(Button)`
  
`

export const MobileLogoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 178px;
`

export const FooterText = styled.p`
  font-family: 'Varela', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  color: #7C7777;
  text-align: center;
`
export const FooterTextAddress = styled(FooterText)`
  margin: 8px 0;
`

export const FooterDeskTextWrap = styled.div`
  display: flex;
  //justify-content: center;
  align-items: center;
  gap: 8px;
`
