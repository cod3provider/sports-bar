import {TableStyle, TableBody, TableHead, Th, Tr, TableWrap, TableHeadTr} from './Table.styled.js';

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
            <td>16:00 - 00:00</td>
          </Tr>
          <Tr>
            <Th>Fri</Th>
            <td>16:00 until the last client</td>
          </Tr>
          <Tr>
            <Th>Sat - Sun</Th>
            <td>10:00 until</td>
          </Tr>
        </TableBody>
      </TableStyle>
    </TableWrap>
  );
};
