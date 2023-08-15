import styled from "styled-components/macro";
import Button from "../Button/Button";
import { LiaConciergeBellSolid } from 'react-icons/lia';
import bgImageMobile from '../../assets/images/backgroundHero.png';

export const HeroStyled = styled.section`
 min-width: 375px;
 height: 734px;
    margin: 0 auto;
    padding-top:160px;
    background-image: url(${bgImageMobile});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover; 
`

export const ButtonHero = styled(Button)`
display: flex;
color: #F3E5CD;
font-family: Varela;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: normal;
max-width: 315px;
padding: 12px 24px;

justify-content: center;
align-items: center;
border: none;
border-radius: 5px;
background: rgba(247, 101, 54, 0.87);
`

export const StyleSvgHero = styled(LiaConciergeBellSolid)`
width: 32px;
height: 32px;
margin-left: 10px;
align-self: center;
`

//   .container {
//     margin: 0 auto;
// max - width: 767px;
// padding: 0 30px 24px;

// }
export const HeroBoxText = styled.div`
  display: flex;
  
  flex-direction: column;
  align-items: center;
`


export const TitleHero = styled.h1`
  font-family: 'Lexend';
  align-self: flex-start;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  margin-bottom: 23px;
  color: #F3E5CD;
`


export const Text = styled.p`
font-family: 'Khmer';
align-self: flex-start;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  margin: 0;
  margin-bottom: 55px;
  line-height: 1.57; /* 157.143% */
  color: #F3E5CD;
`



