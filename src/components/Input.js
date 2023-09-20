import React from 'react'
import './Input.css'

export default function Input({label, ...rest}) {
    return (
        <div className='field'>
            <label>{label}</label>
            <input {...rest}/>
        </div>
    )
}
