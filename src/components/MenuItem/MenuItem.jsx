import PropTypes from 'prop-types';
import TemplateImg from '../../assets/images/template-img.jpg';
import { Counter } from '../Counter/Counter';
import {
  AcceptBtn,
  DescriptionItem,
  ItemBox,
  ItemImage,
  ItemTitle,
  MenuLi,
  OrderBox,
  Price,
  TitleBox,
} from './MenuItem.styled';
import { useDispatch } from 'react-redux';
import { counterIncrement } from '../../redux/menu/menu-action';

export const MenuItem = ({
  menu,
  menu: { description, name, price, img = TemplateImg, quantity },
}) => {
  const dispatch = useDispatch();
  const handleInc = () => dispatch(counterIncrement(menu));
  return (
    <MenuLi>
      <ItemImage src={img} />
      <ItemBox>
        <div>
          <TitleBox>
            <ItemTitle>{name}</ItemTitle>
            <Price>
              <span>&#36;</span>
              {price}
            </Price>
          </TitleBox>
          <DescriptionItem>{description}</DescriptionItem>
        </div>
        <OrderBox>
          {quantity > 0 ? (
            <Counter obj={menu} pages={'menu'} />
          ) : (
            <AcceptBtn type="button" onClick={handleInc}>
              Add to cart
            </AcceptBtn>
          )}
        </OrderBox>
      </ItemBox>
    </MenuLi>
  );
};

MenuItem.propTypes = {
  menu: PropTypes.object.isRequired,
};
