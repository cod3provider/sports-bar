import styled from 'styled-components/macro';
import Button from '../common/Button/Button';

export const MenuLi = styled.li`
  width: 343px;
  /* height: 120px; */
  padding: 0px 10px;
  border-radius: 10px;
  background: #f3e5cd;
  backdrop-filter: blur(2px);
  display: flex;
  padding: 10px;
  margin: 8px auto;
  /* justify-content: space-between; */
  /* align-items: center;
  align-content: center; */
  /* row-gap: 15px; */
  /* flex-shrink: 0; */
  /* flex-wrap: wrap; */
`;

export const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
`;

export const ItemBox = styled.div`
  margin: 7px 0 7px 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ItemTitle = styled.h3`
  color: #333030;
  font-family: Varela Round;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
`;

export const Price = styled.p`
  color: #da5a30;
  font-family: Varela Round;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const DescriptionItem = styled.p`
  color: #807a7a;
  font-family: Varela;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const AcceptBtn = styled(Button)`
  color: #f3e5cd;
  font-family: Varela Round;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  /* width: 84px; */
  height: 32px;
  padding: 10px 15px;

  border-radius: 7px;
  border: 1px solid #e0dfdf;
  background: #da5a30;
`;

export const OrderBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
