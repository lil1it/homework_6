import React from 'react';
import "./button.css"

const Button = (props ) => {
    return (
      
            <button  onClick={props.onClick} className='btn' disabled={props.disabled}>{props.title}</button>
       
    );
};

export default Button;