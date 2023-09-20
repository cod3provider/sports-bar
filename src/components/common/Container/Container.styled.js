import styled from 'styled-components/macro';
import { theme } from '../../../utils/theme.js';

export const Container = styled.div`
  margin: 0 auto;
  padding-right: 16px;
  padding-left: 16px;

  @media (${theme.breakpoints.tablet.media}) {
    max-width: 480px;
  }

  @media (${theme.breakpoints.fromTablet.media}) {
    padding-right: 40px;
    padding-left: 40px;
    max-width: 960px;
  }

  @media (${theme.breakpoints.desktop.media}) {
    max-width: 1280px;
  }
`;
