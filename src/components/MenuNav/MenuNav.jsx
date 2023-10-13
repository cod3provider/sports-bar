import {
  AnchorList,
  LinkIcon,
  SubHeaderBox,
  SubHeaderText,
} from './MenuNav.styled';
import Sprite from '../../assets/images/menu-icons/symbol-defs.svg';
export const MenuNav = () => {
  return (
    <SubHeaderBox>
      <AnchorList>
        <li>
          <a href="#burger">
            <LinkIcon>
              <use href={`${Sprite}icon-burger`}></use>
            </LinkIcon>
            <SubHeaderText>Burger</SubHeaderText>
          </a>
        </li>
        <li>
          <a href="#pizza">
            <LinkIcon>
              <use href={`${Sprite}icon-pizza`}></use>
            </LinkIcon>
            <SubHeaderText>Pizza</SubHeaderText>
          </a>
        </li>
        <li>
          <a href="#salads">
            <LinkIcon>
              <use href={`${Sprite}icon-salad`}></use>
            </LinkIcon>
            <SubHeaderText>Salad</SubHeaderText>
          </a>
        </li>
        <li>
          <a href="#bar">
            <LinkIcon>
              <use href={`${Sprite}icon-beer`}></use>
            </LinkIcon>
            <SubHeaderText>Bar</SubHeaderText>
          </a>
        </li>
      </AnchorList>
    </SubHeaderBox>
  );
};
