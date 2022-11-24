import React, { useState } from 'react'

function Objectv() {

  const [{ counter1, counter2 }, setCounter] = useState({ counter1: 0, counter2: 20 })

  return (
    <div className='container mt-3'>
      <div className='container'>

        <h3>Counter1 : {counter1}</h3>
        {/* <h3>Counter2 : {counter2}</h3> */}

        <button className="btn btn-primary" onClick={() =>
          setCounter(currentState => ({ counter1: currentState.counter1 + 1 }))}>Add</button> &nbsp;

  
        <button className="btn btn-danger" onClick={() => setCounter(currentState => ({       
          counter1: currentState.counter1 - 1,
        }))}>Subtract</button>

        <button className="btn btn-danger" onClick={ () => setCounter(val => ({counter1 : val.counter1 = 0})) }>Reset</button>
      </div>
    </div>
  )
}

export default Objectv;