import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import {Button} from "./Button/Button";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (inputValue: string) => void

}


export function Todolist(props: PropsType) {
     let [inputValue, setInputValue] = useState('')

    let addTaskHandler = () => {
        props.addTask(inputValue)
        setInputValue('')
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>)=>{
        setInputValue(e.currentTarget.value)
    }

/*    const changeFilterAll = () =>{props.changeFilter("all")}
    const changeFilterActive = () =>{props.changeFilter("active")}
    const changeFilterCompleted = () =>{props.changeFilter("completed")}*/
    const changeFilterAll = (value: FilterValuesType) =>{
        props.changeFilter(value)
    }

    let onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
     if (e.key==='Enter') addTaskHandler()
    }
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={inputValue}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
            />
         {/*   <button onClick={addTaskHandler}>+</button>*/}
            <Button name={'+'} callBack={addTaskHandler}/>


        </div>
        <ul>
            {
                props.tasks.map(t => {
                    let removeTaskHandler = () =>{
                        props.removeTask(t.id)
                    }
                    return (
                        <li key={t.id}>
                            <input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                            {/*<button onClick={removeTaskHandler}>x</button>*/}
                            <Button name={'x'} callBack={removeTaskHandler}/>
                        </li>
                    )
                })
            }
        </ul>
        <div>
 {/*           <button onClick={changeFilterAll}>All</button>
            <button onClick={changeFilterActive}>Active</button>
            <button onClick={changeFilterCompleted}>Completed</button>*/}

            <Button name={'All'} callBack={()=>changeFilterAll('all')}/>
            <Button name={'Active'} callBack={()=>changeFilterAll('active')}/>
            <Button name={'Completed'} callBack={()=>changeFilterAll('completed')}/>

        </div>
    </div>
}
