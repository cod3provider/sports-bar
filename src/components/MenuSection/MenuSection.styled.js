import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MenuSectionTitle = styled.h2`
  width: 232px;
  margin: 24px auto;

  text-align: center;
  color: #504c4c;
  font-family: Varela;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.14;
`;

export const MenuSectionText = styled.p`
  width: 302px;
  margin: 0 auto;
  margin-bottom: 24px;

  color: #504c4c;
  font-family: Varela;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const LinkToMenu = styled(Link)`
  width: 100%;
  padding: 8px 64px;

  text-align: center;
  color: #f3e5cd;
  font-family: Varela;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  border-radius: 10px;
  background: #da5a30;
`;
