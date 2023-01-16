
import React, {useState} from "react"
import Button from '../UI/button/Button';
import Forminput from '../UI/form-input/Forminput';
import "./ExpenseForm.css"

export const ExpenseForm = (props) => {
const [title , setTitle]= useState("")
const [price , setPrice]= useState("")
const [date , setDate]= useState("")
const disable = 
title.length > 0 && 
price.length > 0 && 
date.length > 0 ;
const cancelHandler = (e)=>{
    e.preventDefualt()
    props.onShowForm()
};
const titleInputChangeHandler = (event) =>{
    setTitle(event.target.value)
}
const priceInputChangeHandler = (event) =>{
    setPrice(event.target.value)
}
const dateInputChangeHandler = (event) =>{
    setDate(event.target.value)
}

const saveHandler = (event)=>{
    event.preventDefault()

    const expenseData = {
        title,
        price,
        date
    }
    props.onNewExpenseShow(expenseData)

    setTitle("")
    setDate("")
    setPrice('')
}


    return (
        <form className="form-container">
            <Forminput id="name" labelName="Заголовок" inputtype="text" placeholder="Введите название" value={title} onChange={titleInputChangeHandler}/>
            <Forminput  id='name' labelName="Количество" inputtype="number"  value={price} onChange={priceInputChangeHandler}/>
            <Forminput id="name" labelName="Датировать" inputtype="Date" placeholder="дд.мм.гггг" value={date} onChange={dateInputChangeHandler}/>
      

        <div className='btn-under-form'>
            <Button title="Отмена" onClick={cancelHandler}/>
            <Button title="Сохранить" onClick={saveHandler} disabled={!disable}/>
        </div>  
       </form>
    );
};


// export const ExpenseForm = (props) =>{

// }