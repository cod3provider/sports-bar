import { TableStyle, TableBody, TableHead, Th, Tr, TableWrap, TableHeadTr, Td } from './Table.styled.js';

export const Table = () => {
  return (
    <TableWrap>
      <TableStyle>
        <TableHead>
          <TableHeadTr>
            <th colSpan="2">Opening hours:</th>
          </TableHeadTr>
        </TableHead>

        <TableBody>
          <Tr>
            <Th>Mon - Thu</Th>
            <Td>16:00 - 00:00</Td>
          </Tr>
          <Tr>
            <Th>Fri</Th>
            <Td>16:00 until the last client</Td>
          </Tr>
          <Tr>
            <Th>Sat - Sun</Th>
            <Td>10:00 until</Td>
          </Tr>
        </TableBody>
      </TableStyle>
    </TableWrap>
  );
};
