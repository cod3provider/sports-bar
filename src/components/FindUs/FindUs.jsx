import { Section } from '../common/Section/Section.styled.js';
import { TitleStyled } from '../common/Title/Title.styled.js';
import { Table } from '../common/Table/Table.jsx';
import { FindUsSubscribe, InfoWrap, SubscribeWrap, TextAddress } from './FindUs.styled.js';
import { Container } from '../common/Container/Container.styled.js';


const FindUs = () => {
  return (
    <Section>
      <Container>
        <TitleStyled>FindUs</TitleStyled>

          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.21555876014!2d8.240987577221887!3d50.08225091380556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bdbddbe8522769%3A0xd6e8a42f1b4ca954!2sYOURS%20Sports%20Bar!5e0!3m2!1sru!2sua!4v1695310817857!5m2!1sru!2sua'
            width='600' height='450' style='border:0;' allowFullScreen='' loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'>
          </iframe>

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