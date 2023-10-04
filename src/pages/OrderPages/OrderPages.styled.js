import styled from 'styled-components/macro';
import Button from '../../components/common/Button/Button';
import { Container } from '../../components/common/Container/Container.styled';
import bgImageMobile from '../../assets/images/backgroundHero.png';

export const OrderWraper = styled(Container)`
  padding-top: 30px;
  padding-bottom: 30px;
  width: 100vw;
  min-height: 100vh;
  /* background-color: rgba(0, 0, 0, 0.8); */
  /* position: fixed; */
`;

export const BgImg = styled.div`
  background-image: url(${bgImageMobile});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-width: 375px;
  height: 734px;
  margin: 0 auto;
  position: fixed;
  z-index: -1;
`;

export const NotificationContainer = styled.div`
  margin: auto;
  padding: 229px 0;
`;

export const NotificationBox = styled.div`
  margin: 0 auto;
  width: 214px;

  border-radius: 10px;
  border: 1px solid #acad7c;
  background: rgba(144, 138, 138, 0.46);
`;

export const NotificationText = styled.p`
  color: #f3e5cd;

  text-align: center;
  font-family: Varela Round;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const NotificationBtn = styled.button`
  display: block;
  padding: 4px 53px;
  margin: 53px auto 0;

  border-radius: 10px;
  border: 1px solid #8bd8a1;
  background: rgba(140, 138, 144, 0.9);

  color: #ffdba0;
  text-align: center;
  font-family: Varela Round;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const OrderTitle = styled.h2`
  text-align: center;

  color: #f3e5cd;
  font-family: Varela Round;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const OrderText = styled.p`
  text-align: center;

  color: #f3e5cd;
  font-family: Varela Round;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const PlaceOrder = styled(Button)`
  width: 100%;
  padding: 16px 16px;
  margin-top: 64px;

  color: #f3e5cd;
  font-size: 20px;

  border: none;
  border-radius: 10px;
  background: #d85930;
  backdrop-filter: blur(2px);
`;
