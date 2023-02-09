import React, { useState } from 'react';

const Button = () => {
  const [color, setColor] = useState('green');
  const handleClick = () => {
    setColor(color === 'green' ? 'red' : 'green');
  };

  return (
    <div>
      <button onClick={handleClick}>
        Change Color
      </button>
      <p style={{ color }}>Text</p>
    </div>
  );
};

export default Button;