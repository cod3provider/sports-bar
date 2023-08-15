import styled from 'styled-components/macro';
import { theme } from '../../utils/theme.js';

export const Container = styled.div`
  margin: 0 auto;
  padding-right: 16px;
  padding-left: 16px;

  @media (${theme.breakpoints.tablet}) {
    max-width: 480px;
  }

  @media (${theme.breakpoints.fromTablet}) {
    padding-right: 40px;
    padding-left: 40px;
  }

  @media (${theme.breakpoints.fromTablet}) {
    max-width: 960px;
  }

  @media (${theme.breakpoints.desktop}) {
    max-width: 1280px;
  }
`;
