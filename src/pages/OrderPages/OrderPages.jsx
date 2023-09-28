import { OrderList } from '../../components/OrderList/OrderList';
import { useDispatch, useSelector } from 'react-redux';
import { getMenu } from '../../redux/menu/menu-selectors';
import { OrderTable } from '../../components/OrderTable/OrderTable';
import { PlaceOrder } from './OrderPages.styled';
import { placeOrder } from '../../redux/menu/menu-action';

export const OrderPages = () => {
  const dispatch = useDispatch();
  const order = useSelector(getMenu);
  const filteredOrder = order.filter(item => item.quantity > 0);
  const isOrder = order.find(item => item.quantity > 0);

  const handlePlaceOrder = () => dispatch(placeOrder());

  return (
    <>
      <h2>Your order</h2>
      {isOrder ? (
        <>
          <OrderList order={order} />
          <OrderTable order={filteredOrder} />
          <PlaceOrder type="button" onClick={handlePlaceOrder}>
            Place order
          </PlaceOrder>
        </>
      ) : (
        <p>you have not ordered anything</p>
      )}
    </>
  );
};
