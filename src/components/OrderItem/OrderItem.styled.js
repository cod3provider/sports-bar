import styled from 'styled-components/macro';
import {
  ItemBox,
  ItemTitle,
  MenuLi,
  OrderBox,
  Price,
} from '../MenuItem/MenuItem.styled';

import { FiTrash2 } from 'react-icons/fi';

export const OrderLi = styled(MenuLi)`
  margin: 13px auto;
`;

export const OrderImg = styled.img`
  width: 68px;
  height: 68px;
  border-radius: 10px;
`;

export const TrashIcon = styled(FiTrash2)`
  color: #928c8c;
  width: 24px;
  height: 27px;
`;

export const TrashBtn = styled.button`
  margin: 0;
  padding: 0;
  border: none;

  background-color: rgba(255, 0, 0, 0);
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
