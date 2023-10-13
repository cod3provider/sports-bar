import { Container } from '../common/Container/Container.styled';
import { CateegoryBox, CategoryItem, MenuImg } from './Menu.styled';
import Burger from '../../assets/images/menu-section-burger.jpg';
import Pizza from '../../assets/images/menu-section-pizza.jpg';
import Salads from '../../assets/images/menu-section-salads.jpg';
import { MenuList } from '../MenuList/MenuList';
import { useSelector } from 'react-redux';
import { getMenu } from '../../redux/menu/menu-selectors';
// import Bar from '../../assets/images/menu-section-bar.jpg';

export const Menu = ({ favorite }) => {
  const menu = useSelector(getMenu);

  const categories = ['burger', 'pizza', 'salads', 'bar'];
  const imgName = {
    burger: Burger,
    pizza: Pizza,
    salads: Salads,
    // bar: Bar,
  };

  const menuByCategory = category => {
    if (favorite === true) {
      const favoriteMenu = menu.filter(obj => obj.favorite.includes(true));
      return favoriteMenu.filter(obj => obj.categories.includes(category));
    }
    return menu.filter(obj => obj.categories.includes(category));
  };

  return (
    <Container>
      <CateegoryBox>
        {categories.map(
          category =>
            menuByCategory(category).length > 0 && (
              <CategoryItem key={category} id={category}>
                <MenuImg alt={category} src={`${imgName[category]}`} />
                <MenuList
                  category={category}
                  menuByCategory={menuByCategory(category)}
                />
              </CategoryItem>
            )
        )}
      </CateegoryBox>
    </Container>
  );
};
