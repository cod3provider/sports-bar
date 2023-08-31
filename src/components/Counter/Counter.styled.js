import styled from 'styled-components/macro';
import Button from '../Button/Button';

export const CounterBox = styled.div`
  display: flex;
`;

export const CounterBtnPlus = styled(Button)`
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
  border: 1px solid #e0dfdf;
  background: #ffdba0;

  padding: 0 10px;

  color: #4d4b4b;
  font-family: Varela Round;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const CounterBtnMinus = styled(CounterBtnPlus)`
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

export const CounterRes = styled.p`
  border-top: 1px solid #e0dfdf;
  border-bottom: 1px solid #e0dfdf;
  background: #ffdba0;

  color: #4d4b4b;
  font-family: Varela Round;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 0 10px;
`;
