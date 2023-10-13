import styled from 'styled-components';
import { Container } from '../common/Container/Container.styled';
export const SubHeaderBox = styled(Container)`
  position: fixed;
  z-index: 9;

  width: 100%;

  background: #060302;
  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.25);
`;

export const AnchorList = styled.ul`
  display: flex;
  padding: 8px;
`;

export const SubHeaderText = styled.p`
  color: #706d6d;
  font-family: Varela Round;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const LinkIcon = styled.svg`
  height: 36px;
  width: 36px;
  fill: #706d6d;
  background-repeat: no-repeat;
  background-size: contain;
`;
