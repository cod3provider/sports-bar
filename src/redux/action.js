export const counterInc = ({ number, id }) => {
  return {
    type: 'counter/plus',
    payload: {
      id,
      quantity: number + 1,
    },
  };
};
