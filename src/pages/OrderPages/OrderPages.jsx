import { OrderList } from '../../components/OrderList/OrderList';
import { useSelector } from 'react-redux';
import { getOrder } from '../../redux/selectors';

export const OrderPages = () => {
  const order = useSelector(getOrder);
  // const [order, setOrder] = useState([
  //   {
  //     id: '1',
  //     categories: 'burger',
  //     favorite: 'true',
  //     name: 'Harlem Classic Burger',
  //     price: '5.99',
  //     order: '1',
  //     description:
  //       'Blend Pat la Frieda beef, homemade pickles, onions, and special sauce on a buttered and toasted Potato Roll with cheese.',
  //   },
  //   {
  //     id: '2',
  //     categories: 'burger',
  //     favorite: 'true',
  //     name: 'Hot Mess',
  //     price: '4.99',
  //     order: '1',
  //     description:
  //       'Classic, topped with hot mess  (pickled cherry pepper and bacon) relish, American cheese, and smoky chipotle mayo',
  //   },
  //   {
  //     id: '3',
  //     categories: 'burger',
  //     favorite: 'true',
  //     name: 'Impossible Jerk',
  //     price: '7.99',
  //     order: '1',
  //     description:
  //       'Two  beef patties, American cheese, pickles, and onions, topped with jerk fries and jerk mayo.',
  //   },
  // ]);

  return (
    <>
      <h2>Your order</h2>
      {order.length > 0 ? (
        <OrderList order={order} />
      ) : (
        <p>you have not ordered anything</p>
      )}
    </>
  );
};
