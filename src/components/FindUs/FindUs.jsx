import { Section } from '../common/Section/Section.styled.js';
import { TitleStyled } from '../common/Title/Title.styled.js';
import { Table } from '../common/Table/Table.jsx';
import Map from '../Map/Map.jsx';

import { FindUsContentWrap, FindUsSubscribe, InfoWrap, SubscribeWrap, TextAddress } from './FindUs.styled.js';
import { Container } from '../common/Container/Container.styled.js';
import { useMedia } from 'react-use';


const FindUs = () => {
  const tabletWindow = useMedia('(min-width: 768px) and (max-width: 1439.98px)');
  const desktopWindow = useMedia('(min-width: 1440px');

  return (
    <Section>
      <Container>
        <TitleStyled>FindUs</TitleStyled>
        <FindUsContentWrap>
          <Map />
          <InfoWrap>
            {tabletWindow && <Table />}

            {desktopWindow && (
              <Table
                tableWrapStyles={{ width: '500px' }}
                thStyles={{ padding: '25px', width: '165px', fontSize: '20px' }}
                tdStyles={{ padding: '25px, 65px', fontSize: '20px' }}
                THeadStyles={{ padding: '7px', fontSize: '24px'}}
              />
            )}
            <SubscribeWrap>
              <TextAddress>
                Wilhelmstr. 38(Marktplatz)
                65183 Wiesbaden
              </TextAddress>

              <FindUsSubscribe />
            </SubscribeWrap>
          </InfoWrap>
        </FindUsContentWrap>
      </Container>
    </Section>
  );
};

export default FindUs;