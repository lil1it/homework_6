import React, { useState } from 'react';
import { ExpenseForm } from '../expense-form/ExpenseForm';
import Button from '../UI/button/Button';
import"./NewExpense.css"

const NewExpense = ({onNewExpenseShow}) => {
    const [showForm, setShowForm] = useState(false)

const showExpenseForm =()=>{
    setShowForm((prevState)=>{
        return !prevState
    })
}

    return (
        <div className='form'>
            {showForm? (
               <ExpenseForm 
               onShowForm = {showExpenseForm}
               onNewExpenseShow={onNewExpenseShow}/> 
            ):(  <Button  className="btn-add" title="Добавить новый расход" onClick={showExpenseForm}></Button>  )}
        
          

        </div>
    );
};

export default NewExpense;