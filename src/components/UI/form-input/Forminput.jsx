import React from 'react';
import "./FormInput.css"

const Forminput = ({labelName , id ,placeholder,inputtype , ...rest}) => {
    return (
        <div className='container' >
             <label htmlFor={id}>{labelName}</label>
            <input className='form-input' placeholder={placeholder || "..."} id={id} type={inputtype} {...rest}></input>
        </div>
    );
};

export default Forminput;