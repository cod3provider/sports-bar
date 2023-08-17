import PropTypes from 'prop-types';
import TemplateImg from '../../assets/images/template-img.jpg';
import { Counter } from '../Counter/Counter';
import {
  DescriptionItem,
  ItemBox,
  ItemImage,
  ItemTitle,
  MenuLi,
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
        <TitleBox>
          <ItemTitle>{name}</ItemTitle>
          <Price>
            <span>&#36;</span>
            {price}
          </Price>
        </TitleBox>
        <DescriptionItem>{description}</DescriptionItem>

        <Counter />
        <button>Add to cart</button>
      </ItemBox>
    </MenuLi>
  );
};

MenuItem.propTypes = {
  menu: PropTypes.object.isRequired,
};
