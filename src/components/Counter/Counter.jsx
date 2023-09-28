import { useState } from 'react';
import {
  CounterBox,
  CounterBtnMinus,
  CounterBtnPlus,
  CounterRes,
} from './Counter.styled';
import { useDispatch } from 'react-redux';
import {
  counterDecrement,
  counterIncrement,
} from '../../redux/menu/menu-action';

export const Counter = ({ obj }) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(counterIncrement(obj));
  };
  const handleDecrement = () => {
    if (obj.quantity === 1) {
      const isConfirmDelete = confirm('are you sure');

      if (isConfirmDelete === true) {
        dispatch(counterDecrement(obj));
        return;
      } else {
        return null;
      }
    }

    dispatch(counterDecrement(obj));
  };

  return (
    <CounterBox>
      <CounterBtnMinus type="button" onClick={handleDecrement}>
        -
      </CounterBtnMinus>
      <CounterRes>{obj.quantity}</CounterRes>
      <CounterBtnPlus type="button" onClick={handleIncrement}>
        +
      </CounterBtnPlus>
    </CounterBox>
  );
};
