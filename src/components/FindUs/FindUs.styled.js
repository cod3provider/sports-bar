import styled from 'styled-components/macro';
import SubscribeForm from '../common/SubscribeForm/index.js';
// import { TableWrap } from '../common/Table/Table.styled.js';

export const TextAddress = styled.p`
  color: #504C4C;
  text-align: center;
  font-family: 'Varela' ,sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.31;
  
  @media (1440px <= width) {
    font-size: 26px;
  }
`

export const FindUsContentWrap = styled.div`
  @media (1440px <= width) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
  }
`

export const SubscribeWrap = styled.div`
  width: 278px;

`
export const FindUsSubscribe = styled(SubscribeForm)`
  width: 278px;
`

export const InfoWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 90px;
  margin-top: 24px;
  
  @media (1440px <= width) {
    flex-direction: column;
    width: 500px;
  }
`

// export const FindUsTable = styled(TableWrap)`
//
//   @media (1440px <= width) {
//     width: 500px;
//   }
// `