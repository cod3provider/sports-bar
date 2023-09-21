import { OrderItem } from '../OrderItem/OrderItem';
import { OrderUl } from './OrderList.styled';

export const OrderList = ({ order }) => {
  return (
    <OrderUl>
      {order.map(item => (
        <OrderItem key={item.id} orderDish={item}></OrderItem>
      ))}
    </OrderUl>
  );
};
