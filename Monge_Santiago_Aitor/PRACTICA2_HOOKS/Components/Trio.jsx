import { useEffect, useState } from 'react';

const Trio = () => {
    const [age, setAge]= useState(0);
    const lvlUP = () => {
        setAge(age + 1);
    };

    const lvlDOWN = () => {
        setAge(age - 1);
    };

    const restart = () => {
        setAge(0);
    };

    return (
        <div>
            <button onClick={lvlUP}>Suma</button>
            <button onClick={lvlDOWN}>Resta</button>
            <button onClick={restart}>Reiniciar</button>
            <br/>
            {age}
        </div>
    );
}

export default Trio