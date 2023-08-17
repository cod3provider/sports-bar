import PropTypes from 'prop-types';
import { MenuItem } from '../MenuItem/MenuItem';
import { MenuListBox } from './MenuList.styled';

export const MenuList = ({ menuByCategory }) => {
  return (
    <MenuListBox>
      {menuByCategory.map(obj => (
        <MenuItem menu={obj} key={obj.id} />
      ))}
    </MenuListBox>
  );
};

MenuList.propTypes = {
  menuByCategory: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
};
