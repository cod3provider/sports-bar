import styled from 'styled-components/macro';

export const StyledGoogleMap = styled.div`
  margin: 0 auto;
  width: 714px;
  height: 407px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 7px 7px 15px 0 rgba(0, 0, 0, 0.30);

  @media (1440px <= width) {
    margin: 0;
    width: 700px;
    height: 470px;
  }
`;

