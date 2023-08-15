import { useState } from 'react';

export const Counter = () => {
  const [number, setNumber] = useState(0);
  const handleIncrement = () => setNumber(number + 1);
  const handleDecrement = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  return (
    <>
      <button type="button" onClick={handleDecrement}>
        -
      </button>
      <p>{number}</p>
      <button type="button" onClick={handleIncrement}>
        +
      </button>
    </>
  );
};
