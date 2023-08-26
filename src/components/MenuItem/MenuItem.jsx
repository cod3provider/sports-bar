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

export const MenuItem = ({
  menu: { description, name, price, img = TemplateImg },
}) => {
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
          <Counter />
          <AcceptBtn>Add to cart</AcceptBtn>
        </OrderBox>
      </ItemBox>
    </MenuLi>
  );
};

MenuItem.propTypes = {
  menu: PropTypes.object.isRequired,
};
