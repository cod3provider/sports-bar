import { Container } from '../common/Container/Container.styled';

import { Table } from '../common/Table/Table';
import {
  HeroStyled,
  HeroBoxText,
  TitleHero,
  Text,
  ButtonHero,
  StyleSvgHero,
} from './Hero.styled';

const Hero = () => {
  return (
    <>
      <HeroStyled>
        <Container>
          <div>
            <div>
              <HeroBoxText>
                <TitleHero>Come on in and have a Great Time!</TitleHero>
                <Text>Book your seat, enjoy with 25% off pre-booking.</Text>
              </HeroBoxText>

              <ButtonHero>
                Book a table <StyleSvgHero />
              </ButtonHero>
            </div>

            <div>
              <Table />
            </div>
          </div>
        </Container>
      </HeroStyled>
    </>
  );
};

export default Hero;
