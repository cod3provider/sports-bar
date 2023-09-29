import { TableMainText } from '../../OrderTable/OrderTable.styled';

export const TableRow = ({
  orderItem: { name, price, quantity },
  idx,
  setTotalPrise,
}) => {
  const totalPrice = price * quantity;

  return (
    <tr>
      <td>{idx === 0 && <TableMainText>Your order</TableMainText>}</td>
      <td>
        <TableMainText>{name}</TableMainText>
      </td>
      <td>
        <TableMainText>
          <span>&#36;</span>
          {totalPrice.toFixed(2)}
        </TableMainText>
      </td>
    </tr>
  );
};
