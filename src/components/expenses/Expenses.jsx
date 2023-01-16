import React, { useState } from 'react';
import Chart from '../chart/Chart';
import ExpenseFilter from '../expense-filter/ExpenseFilter';
import { ExpenseItem } from '../expense.item/ExpenseItem';
import"./Expenses.css"




const Expenses = ({expense}) => {

    const [selectedYear, setSelectedYear] = useState("2022");

    const yearChangeHandler = (event) => {
      setSelectedYear(event.target.value);
    };

const filteredItems = expense.filter((elem) => {
    const stringifiedYear = new Date(elem.date).getFullYear().toString()
    return stringifiedYear === selectedYear;
  });


    return (
        <ul className='ul-list' >
<ExpenseFilter value={selectedYear} onChange={yearChangeHandler} />
      <Chart items={filteredItems}/>

            {filteredItems.map((elem)=>{
                return (
        <ExpenseItem key ={elem.id + new Date().getTime} title={elem.title} date={new Date(elem.date)} price={elem.price}/>
           ) }) }
        </ul>
    );
};

export default Expenses;