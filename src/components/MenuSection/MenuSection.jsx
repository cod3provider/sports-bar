import { Menu } from '../Menu/Menu';
import {
  LinkToMenu,
  MenuSectionText,
  MenuSectionTitle,
} from './MenuSection.styled';

export const MenuSection = () => {
  return (
    <>
      <MenuSectionTitle>Would you like to dine with us?</MenuSectionTitle>
      <MenuSectionText>
        You can taste our hits of the week or go to the full menu
      </MenuSectionText>
      <LinkToMenu>Main menu</LinkToMenu>
      <Menu favorite={true} />;
    </>
  );
};
