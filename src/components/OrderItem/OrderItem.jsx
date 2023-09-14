import TemplateImg from '../../assets/images/template-img.jpg';
import { Counter } from '../Counter/Counter';
import { MenuLi, OrderBox } from '../MenuItem/MenuItem.styled';
import {
  DishDescrBox,
  DishPrice,
  OrderContainer,
  OrderDishTitle,
  OrderImg,
  OrderLi,
} from './OrderItem.styled';
export const OrderItem = ({
  orderDish,
  orderDish: { id, img = TemplateImg, name, price, quantity },
}) => {
  return (
    <>
      {quantity > 0 && (
        <OrderLi>
          <OrderImg src={img} />
          <DishDescrBox>
            <OrderDishTitle> {name}</OrderDishTitle>

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
