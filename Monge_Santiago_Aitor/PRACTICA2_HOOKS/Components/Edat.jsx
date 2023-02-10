import { useEffect, useState } from 'react';

const Edat = () => {
    const [age, setAge]= useState(0);
    const lvlUP = () => {
        setAge(age + 1);
    };

    return (
        <div>
            <button onClick={lvlUP}>Cumplo años</button>
            <br/>
            {age}
        </div>
    );
}

export default Edat