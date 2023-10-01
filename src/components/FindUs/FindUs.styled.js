import styled from 'styled-components/macro';
import SubscribeForm from '../common/SubscribeForm/index.js';

export const TextAddress = styled.p`
  color: #504C4C;
  text-align: center;
  font-family: 'Varela' ,sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.31;
  
  @media (1280px <= width) {
    font-size: 26px;
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
  
  @media (1280px <= width) {
    flex-direction: column;
  }
`