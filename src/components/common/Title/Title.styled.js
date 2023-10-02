import styled from 'styled-components/macro';

export const TitleStyled = styled.h2`
  margin-bottom: 24px;
  font-size: 28px;
  font-weight: 400;
  line-height: 1.14;
  text-align: center;
  font-family: 'Varela', sans-serif;
  color: #504C4C;
  
  @media (768px <= width) {
    font-size: 48px;
    line-height: 1.17;
  }
  
  @media (1440px <= width) {
    font-size: 64px;
    line-height: 1.13;
  }
`