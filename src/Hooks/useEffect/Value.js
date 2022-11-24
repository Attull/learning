import React,  { useState, useEffect } from 'react'

function Value() {

    useEffect(() => {
        console.log("Rendering ...")
    },[])

    return (
        <div className='container mt-3'>
            <h2>HelloWorld component</h2>
        </div>
    )
}

export default Value

// and App.jsx

