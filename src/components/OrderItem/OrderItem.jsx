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
import { delOrder } from '../../redux/action';
export const OrderItem = ({
  orderDish,
  orderDish: { id, img = TemplateImg, name, price, quantity },
}) => {
  const dispatch = useDispatch();

  const handleDecr = () => {
    confirm('are you sure');
    dispatch(delOrder(orderDish));
    return;
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
