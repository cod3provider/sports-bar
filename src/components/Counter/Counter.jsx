import { useState } from 'react';
import {
  CounterBox,
  CounterBtnMinus,
  CounterBtnPlus,
  CounterRes,
} from './Counter.styled';
import { useDispatch } from 'react-redux';
import { counterInc } from '../../redux/action';

export const Counter = ({ quantity }) => {
  const [number, setNumber] = useState(quantity);

  const dispatch = useDispatch();

  const handleIncrement = () => dispatch(counterInc(number, id));
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
