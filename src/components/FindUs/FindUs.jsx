import { Section } from '../common/Section/Section.styled.js';
import { TitleStyled } from '../common/Title/Title.styled.js';
import { Table } from '../common/Table/Table.jsx';
import Map from '../Map/Map.jsx';

import { FindUsSubscribe, InfoWrap, SubscribeWrap, TextAddress } from './FindUs.styled.js';
import { Container } from '../common/Container/Container.styled.js';


const FindUs = () => {
  return (
    <Section>
      <Container>
        <TitleStyled>FindUs</TitleStyled>
        <Map />
        <InfoWrap>
          <Table />
          <SubscribeWrap>
            <TextAddress>
              Wilhelmstr. 38(Marktplatz)
              65183 Wiesbaden
            </TextAddress>

            <FindUsSubscribe />
          </SubscribeWrap>
        </InfoWrap>
      </Container>
    </Section>
  );
};

export default FindUs;