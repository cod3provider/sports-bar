import styled from "styled-components";
import bgImageMobile from '../../assets/images/backgroundHero.png';

export const HeroStyled = styled.section`
 min-width: 375px;
    margin: 0 auto;
    padding-top:160px;
    background-image: url(${bgImageMobile});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover; 
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



