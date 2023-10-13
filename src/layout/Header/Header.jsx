import Nav from '../../components/Nav/index.js';

import { Container } from '../../components/common/Container/Container.styled.js';
import { HeaderBox, HeaderSection, HeaderStyled } from './Header.styled.js';

const Header = () => {
  return (
    <>
      <HeaderSection>
        <HeaderStyled>
          <Container>
            <Nav />
          </Container>
        </HeaderStyled>
      </HeaderSection>
      <HeaderBox></HeaderBox>
    </>
  );
};

export default Header;
