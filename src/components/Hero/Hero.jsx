import Button from '../Button/Button';
import { Container } from '../Container/Container.styled';

import Table from '../Table/Table';
import { HeroStyled, HeroBoxText, TitleHero, Text } from './Hero.styled';

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
              <Button>
                Book a table <span>*</span>
              </Button>
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
