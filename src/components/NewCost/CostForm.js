import './CostForm.css'
import React,{useState} from "react";

const CostForm = (props) => {
    const [inputName, setInputName] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     name: '',
    //     amount: '',
    //     date: ''
    // })

    const nameChangeHandler = (event) => {
        setInputName(event.target.value)

    };
    const amountChangeHandler = (event) => {
        setInputAmount(event.target.value)

    };
    const dateChangeHandler = (event) => {
        setInputDate(event.target.value)
    }

    const submitHandler=(event) => {
        event.preventDefault();

        const costData = {
            description: inputName,
            amount: inputAmount,
            date: new Date(inputDate),
        };

        props.onSaveCostData(costData);
        setInputName('');
        setInputAmount('')
        setInputDate('')
    };

    return (
        <form onSubmit={submitHandler}>
        <div className='new-cost__controls'>
            <div className='new-cost__control'>
                <label>Название</label>
                <input type="text" value={inputName} onChange={nameChangeHandler}/>
            </div>
            <div className='new-cost__control'>
                <label>Сумма</label>
                <input value={inputAmount} type="number" onChange={amountChangeHandler}/>
            </div>
             <div className='new-cost__control'>
            <label>Дата</label>
            <input value={inputDate} type="date" min='2019-01-01' step='2022-12-31' onChange={dateChangeHandler}/>
            </div>
        <div className='new-cost__actions'>
            <button type='submit'>Добавить Расход</button>
            <button type='reset'>Отменить</button>
        </div>
        </div>
    </form>)
}
export default CostForm