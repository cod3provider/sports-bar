import PropTypes from 'prop-types';
import { MenuItem } from '../MenuItem/MenuItem';

export const MenuList = ({ menuByCategory }) => {
  return (
    <ul>
      {menuByCategory.map(obj => (
        <MenuItem menu={obj} key={obj.id} />
      ))}
    </ul>
  );
};

MenuList.propTypes = {
  menuByCategory: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
};
