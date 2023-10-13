import { Menu } from '../Menu/Menu';
import {
  LinkToMenu,
  MenuSectionContainer,
  MenuSectionText,
  MenuSectionTitle,
} from './MenuSection.styled';

export const MenuSection = () => {
  return (
    <MenuSectionContainer>
      <MenuSectionTitle>Would you like to dine with us?</MenuSectionTitle>
      <MenuSectionText>
        You can taste our hits of the week or go to the full menu
      </MenuSectionText>
      <LinkToMenu to="menu">Main menu</LinkToMenu>
      <Menu favorite={true} />;<LinkToMenu to="menu">Main menu</LinkToMenu>
    </MenuSectionContainer>
  );
};
