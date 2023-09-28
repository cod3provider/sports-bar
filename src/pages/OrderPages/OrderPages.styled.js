import styled from 'styled-components/macro';
import Button from '../../components/common/Button/Button';

export const OrderTitle = styled.h2`
  color: #f3e5cd;
  font-family: Varela Round;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const PlaceOrder = styled(Button)`
  width: 100%;
  padding: 16px 16px;
  margin-top: 64px;

  color: #f3e5cd;
  font-size: 20px;

  border: none;
  border-radius: 10px;
  background: #d85930;
  backdrop-filter: blur(2px);
`;
