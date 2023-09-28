import { useDispatch } from 'react-redux';
import TemplateImg from '../../assets/images/template-img.jpg';
import { Counter } from '../Counter/Counter';
import { MenuLi, OrderBox, TitleBox } from '../MenuItem/MenuItem.styled';
import {
  DishDescrBox,
  DishPrice,
  OrderContainer,
  OrderDishTitle,
  OrderImg,
  OrderLi,
  TrashBtn,
  TrashIcon,
} from './OrderItem.styled';
import { counterDecrement, deleteOrder } from '../../redux/menu/menu-action';
export const OrderItem = ({
  orderDish,
  orderDish: { id, img = TemplateImg, name, price, quantity },
}) => {
  const dispatch = useDispatch();

  const handleDecr = () => {
    const isConfirmDelete = confirm('are you sure');

    if (isConfirmDelete === true) {
      dispatch(deleteOrder(orderDish));
      return;
    } else {
      return null;
    }
  };

  return (
    <>
      {quantity > 0 && (
        <OrderLi>
          <OrderImg src={img} />
          <DishDescrBox>
            <TitleBox>
              <OrderDishTitle> {name}</OrderDishTitle>
              <TrashBtn type="button" onClick={handleDecr}>
                <TrashIcon />
              </TrashBtn>
            </TitleBox>

            <OrderContainer>
              <DishPrice>
                <span>&#36;</span>
                {price}
              </DishPrice>
              <Counter obj={orderDish} pages={'order'} />
            </OrderContainer>
          </DishDescrBox>
        </OrderLi>
      )}
    </>
  );
};
