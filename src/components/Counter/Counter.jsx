import { useState } from 'react';
import {
  CounterBox,
  CounterBtnMinus,
  CounterBtnPlus,
  CounterRes,
} from './Counter.styled';
import { useDispatch } from 'react-redux';
import { counterDec, counterInc } from '../../redux/action';

export const Counter = ({ obj, pages }) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    switch (pages) {
      case 'menu':
        break;

      default:
        break;
    }
    dispatch(counterInc(obj));
  };
  const handleDecrement = () => {
    if (obj.quantity === 0) {
      return;
    }
    if (obj.quantity === 1) {
      confirm('are you sure');
      dispatch(counterDec(obj));
      return;
    }

    dispatch(counterDec(obj));
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
