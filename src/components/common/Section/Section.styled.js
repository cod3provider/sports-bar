import styled from "styled-components/macro";

export const Section = styled.section`
  padding-top: 24px;
  padding-bottom: 24px;
  
  @media (768px <= width) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  
  @media (1280px <= width) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`;
