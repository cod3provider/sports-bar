import PropTypes from 'prop-types';
import TemplateImg from '../../assets/images/template-img.jpg';
import { Counter } from '../Counter/Counter';

export const MenuItem = ({
  menu: { description, name, price, img = TemplateImg },
}) => {
  return (
    <li>
      <img src={img} />
      <div>
        <h3>{name}</h3>
        <p>
          <span>&#36;</span>
          {price}
        </p>
        <p>{description}</p>
        <Counter />
        <button>Add to cart</button>
      </div>
    </li>
  );
};

MenuItem.propTypes = {
  menu: PropTypes.object.isRequired,
};
