import React, { useState } from 'react'

export default function Lstorage() {
  
  // localStorage.getItem("name") || 
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    return (
      <div className="App">
  
        <div className="container mt-3">
          <input placeholder='enter your first name' onChange={e => {
            setFirstName(e.target.value)
            // localStorage.setItem("name", e.target.value)
          }} className='form-control' />

        <input  placeholder='enter your last name' onChange={e => {
            setLastName(e.target.value)
            // localStorage.setItem("name", e.target.value)
          }} className='form-control' />

          {/* <h3>Full name : {firstName + " " + lastName}</h3> */}
          <h3>Full name : {`${firstName} ${lastName}`}</h3>
        </div>
  
      </div >
    );
}
