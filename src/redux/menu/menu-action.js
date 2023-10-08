import { createAction } from '@reduxjs/toolkit';

export const counterIncrement = createAction('counter/plus', data => {
  return {
    payload: {
      ...data,
      quantity: data.quantity + 1,
    },
  };
});

export const counterDecrement = createAction('counter/minus', data => {
  return {
    payload: {
      ...data,
      quantity: data.quantity - 1,
    },
  };
});

export const deleteOrder = createAction('order/delete', data => {
  return {
    payload: {
      ...data,
      quantity: 0,
    },
  };
});

export const placeOrder = createAction('order/place');
