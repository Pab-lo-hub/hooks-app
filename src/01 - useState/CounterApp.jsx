import React from 'react'
import { useState } from 'react'

const CounterApp = () => {
    const [counter, setCounter] = useState(10)

    return (
        <>
            <h1>Counter:</h1>
            <hr />
            <button>+1</button>
        </>
    )
}

export default CounterApp