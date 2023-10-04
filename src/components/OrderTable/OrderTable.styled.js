import styled from 'styled-components/macro';

export const Tabe = styled.table`
  width: 100%;
  border-radius: 10px;
  background: #f3e5cd;
  padding: 8px;
`;
export const Tbody = styled.tbody`
  /* width: 100%;
  display: inline-block; */
  margin-bottom: 36px;
`;

export const TableMainText = styled.p`
  color: #928c8c;
  font-family: Varela Round;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const TableAcentText = styled(TableMainText)`
  color: #333030;
`;

export const TableFooterText = styled(TableAcentText)`
  margin-top: 36px;
`;
