import React from 'react';
import Date from './Date';

import "./ExpenseItem.css"

export const ExpenseItem = ({title ,date ,price }) => {

    
    return (
        <div className='items-elem'>
            <div className='side-left'>
         <Date className='p-date' date={date}/>
           <p className='p-title'>{title}</p> 
       
           </div> 
           <p className='p-price'> $ {price}</p>
        </div>
    );
};
