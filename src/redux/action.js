export const counterInc = payload => {
  return {
    type: 'counter/plus',
    payload: {
      ...payload,
      quantity: payload.quantity + 1,
    },
  };
};

export const counterDec = payload => {
  return {
    type: 'counter/minus',
    payload: {
      ...payload,
      quantity: payload.quantity - 1,
    },
  };
};
