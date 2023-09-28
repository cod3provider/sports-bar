/* eslint-disable react-hooks/exhaustive-deps */
import { TableRow } from '../common/TableRow/TableRow';
import {
  Tabe,
  TableAcentText,
  TableFooterText,
  Tbody,
} from './OrderTable.styled';

export const OrderTable = ({ order }) => {
  let total = 0;
  for (const element of order) {
    const elementTotal = Number(element.price) * element.quantity;
    total += elementTotal;
  }

  return (
    <Tabe>
      <Tbody>
        {order.map((orderItem, idx) => (
          <TableRow key={orderItem.id} idx={idx} orderItem={orderItem} />
        ))}
      </Tbody>
      <tfoot>
        <tr>
          <td>
            <TableFooterText>Total</TableFooterText>
          </td>
          <td></td>
          <td>
            <TableAcentText>
              <span>&#36;</span>
              {total.toFixed(2)}
            </TableAcentText>
          </td>
        </tr>
      </tfoot>
    </Tabe>
  );
};
