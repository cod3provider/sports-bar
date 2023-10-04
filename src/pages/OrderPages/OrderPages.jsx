import { OrderList } from '../../components/OrderList/OrderList';
import { useDispatch, useSelector } from 'react-redux';
import { getMenu } from '../../redux/menu/menu-selectors';
import { OrderTable } from '../../components/OrderTable/OrderTable';
import {
  BgImg,
  NotificationBox,
  NotificationBtn,
  NotificationContainer,
  NotificationText,
  OrderText,
  OrderTitle,
  OrderWraper,
  PlaceOrder,
} from './OrderPages.styled';
import { placeOrder } from '../../redux/menu/menu-action';
import { useState } from 'react';

export const OrderPages = () => {
  const [procOrder, setProcOrder] = useState(false);
  const dispatch = useDispatch();
  const order = useSelector(getMenu);
  const filteredOrder = order.filter(item => item.quantity > 0);
  const isOrder = order.find(item => item.quantity > 0);

  const handleToglOrder = () => setProcOrder(!procOrder);

  const handlePlaceOrder = () => {
    handleToglOrder();
    // console.log(procOrder);
    dispatch(placeOrder());
  };
  // console.log(procOrder);
  return (
    <>
      <BgImg></BgImg>
      {procOrder && (
        <NotificationContainer>
          <NotificationBox>
            <NotificationText>
              Your order is being processed Please wait
            </NotificationText>
          </NotificationBox>
          <NotificationBtn onClick={handleToglOrder}>OK</NotificationBtn>
        </NotificationContainer>
      )}

      <OrderWraper>
        {isOrder && (
          <>
            <OrderTitle>Your order</OrderTitle>
            <OrderList order={order} />
            <OrderTable order={filteredOrder} />
            <PlaceOrder type="button" onClick={handlePlaceOrder}>
              Place order
            </PlaceOrder>
          </>
        )}

        {!isOrder && !procOrder && (
          <OrderText>You have not ordered anything</OrderText>
        )}
      </OrderWraper>
    </>
  );
};
