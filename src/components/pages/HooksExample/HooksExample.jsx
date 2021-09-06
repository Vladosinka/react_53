/* eslint-disable no-console */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';

function HooksExample() {
  // Объявление переменной состояния, которую мы назовём "count"
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Y');

  useEffect(() => {
    console.log(name);
    return () => {
      console.log('unmount');
    };
  }, [name]);

  return (
    <div>
      <p>Вы кликнули {count} раз</p>
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
      <button onClick={() => setCount(count + 1)}>Нажми на меня</button>
      <button onClick={() => console.log(name)}>Нажми на меня</button>
    </div>
  );
}

export default HooksExample;
