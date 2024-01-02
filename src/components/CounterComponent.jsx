import React from 'react'
import useCounter from '../hooks/useCounter.jsx'


const CounterComponent = () => {

const {contador, suma, resta} = useCounter(0,2)

    return (
        <div>
             <h2>Contador:{contador}</h2>
            <button onClick={suma}> sumar</button>
             <button onClick={resta}>restar</button>
        </div>
  )
}

export default CounterComponent
