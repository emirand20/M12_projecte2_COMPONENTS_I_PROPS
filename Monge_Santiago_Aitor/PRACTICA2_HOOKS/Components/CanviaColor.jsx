import React, {useState} from 'react';

const CanviaColor = () => {
    const [color, setColor] = useState('green');
    const canvia = () => {
        setColor(color === 'green' ? 'red' : 'green');
    };

    return (
        <div>
            <button onClick={canvia}>
                Cambiame de color</button>
            <h1 style={{color}}>CAMBIO</h1>
        </div>
    );
};

export default CanviaColor