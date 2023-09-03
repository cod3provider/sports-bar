import styled from 'styled-components/macro';
import {
  ItemBox,
  ItemTitle,
  MenuLi,
  OrderBox,
  Price,
} from '../MenuItem/MenuItem.styled';

export const OrderLi = styled(MenuLi)`
  margin: 13px auto;
`;

export const OrderImg = styled.img`
  width: 68px;
  height: 68px;
  border-radius: 10px;
`;

export const DishDescrBox = styled(ItemBox)`
  margin: 0;
  margin-left: 16px;
`;

export const OrderDishTitle = styled(ItemTitle)`
  font-size: 20px;
`;

export const OrderContainer = styled(OrderBox)`
  align-items: end;
`;

export const DishPrice = styled(Price)`
  color: #333030;
  font-size: 20px;
`;
