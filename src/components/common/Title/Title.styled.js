import styled from 'styled-components/macro';

export const TitleStyled = styled.h2`
  color: #504C4C;
  text-align: center;
  font-family: 'Varela', sans-serif;
  font-size: 28px;
  font-weight: 400;
  line-height: 1.14;
  
  @media (768px <= width) {
    font-size: 48px;
    line-height: 1.17;
  }
  
  @media (1280px <= width) {
    font-size: 64px;
    line-height: 1.13;
  }
`