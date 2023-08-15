import { TableStyle, TableBody } from './Table.styled';

export const Table = () => {
  return (
    <>
      <TableStyle>
        <thead>
          <tr>
            <th>Opening hours:</th>
          </tr>
        </thead>
        <TableBody>
          <tr>
            <th>Mon - Thu</th>
            <td>16:00 - 00:00</td>
          </tr>
          <tr>
            <th>Fri</th>
            <td>16:00 until the last client</td>
          </tr>
          <tr>
            <th>Sat - Sun</th>
            <td>10:00 until</td>
          </tr>
        </TableBody>
      </TableStyle>
    </>
  );
};
