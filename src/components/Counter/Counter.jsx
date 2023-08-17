import { useState } from 'react';
import {
  CounterBox,
  CounterBtnMinus,
  CounterBtnPlus,
  CounterRes,
} from './Counter.styled';

export const Counter = () => {
  const [number, setNumber] = useState(0);
  const handleIncrement = () => setNumber(number + 1);
  const handleDecrement = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  return (
    <CounterBox>
      <CounterBtnMinus type="button" onClick={handleDecrement}>
        -
      </CounterBtnMinus>
      <CounterRes>{number}</CounterRes>
      <CounterBtnPlus type="button" onClick={handleIncrement}>
        +
      </CounterBtnPlus>
    </CounterBox>
  );
};
