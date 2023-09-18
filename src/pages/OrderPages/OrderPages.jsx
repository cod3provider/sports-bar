import { OrderList } from '../../components/OrderList/OrderList';
import { useSelector } from 'react-redux';
import { getMenu } from '../../redux/selectors';

export const OrderPages = () => {
  const order = useSelector(getMenu);
  const isOrder = order.find(item => item.quantity > 0);
  return (
    <>
      <h2>Your order</h2>
      {isOrder ? (
        <OrderList order={order} />
      ) : (
        <p>you have not ordered anything</p>
      )}
    </>
  );
};
