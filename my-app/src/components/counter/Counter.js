import './Counter.css'
import { useState } from 'react'



function Counter() {

    const [counter, setCounter] = useState(1)

    const plus = () => {
        setCounter(counter + 1)
    }
    const minus = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }

    return (
        <>
            <div className='Counter-wrapper'>
                <img src={require(`../counter/icecream.png`)} alt='icecream'></img>

                <div className="Counter-layout">
                    <div onClick={minus} className="Counter-button__minus">-</div>
                    <div className='Counter-status'>Порции: {counter}</div>
                    <div onClick={plus} className="Counter-button__plus">+</div>
                </div>
            </div>
        </>

    );
}

export default Counter;