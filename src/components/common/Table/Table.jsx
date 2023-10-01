import { TableStyle, TableBody, TableHead, Th, Tr, TableWrap, TableHeadTr, Td } from './Table.styled.js';

export const Table = ({ tableWrapStyles, THeadStyles, thStyles, tdStyles }) => {
  return (
    <TableWrap style={tableWrapStyles}>
      <TableStyle>
        <TableHead>
          <TableHeadTr>
            <th style={THeadStyles} colSpan="2">Opening hours:</th>
          </TableHeadTr>
        </TableHead>

        <TableBody>
          <Tr>
            <Th style={thStyles}>Mon - Thu</Th>
            <Td style={tdStyles}>16:00 - 00:00</Td>
          </Tr>
          <Tr>
            <Th style={thStyles}>Fri</Th>
            <Td style={tdStyles}>16:00 until the last client</Td>
          </Tr>
          <Tr>
            <Th style={thStyles}>Sat - Sun</Th>
            <Td style={tdStyles}>10:00 until</Td>
          </Tr>
        </TableBody>
      </TableStyle>
    </TableWrap>
  );
};
