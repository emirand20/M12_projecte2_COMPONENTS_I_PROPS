import { useState } from 'react'

const Boto = () => {
    const [display, setDisplay] = useState(true)
    const handleClick = () => setDisplay(!display)

    return (
        <div>
            <button onClick={handleClick}>Mostra/Amaga</button>
            {display && <p>Hola</p>}
        </div>
    );
}

export default Boto