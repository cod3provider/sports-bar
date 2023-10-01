import styled from 'styled-components/macro';
import SubscribeForm from '../common/SubscribeForm/index.js';
import { IoLocationOutline } from 'react-icons/io5';

export const TextAddress = styled.p`
  color: #504C4C;
  text-align: center;
  font-family: 'Varela' ,sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.31;
  
  @media (768px <= width) {
    width: 204px;
  }
  
  @media (1440px <= width) {
    width: 380px;
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
  margin-top: 36px;
  
  @media (1440px <= width) {
    flex-direction: column;
    gap: 30px;
    width: 500px;
  }
`

export const FindUsIconTextWrap = styled.div`
  display: flex;
  justify-content: space-between;
`

export const FindUsIconLocation = styled(IoLocationOutline)`
  width: 32px;
  height: 32px;
  color: #504C4C;
  
  @media (1440px <= width) {
    width: 57px;
    height: 57px;
  }
`