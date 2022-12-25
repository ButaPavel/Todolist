import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {FilterValuesType} from "./App";


export type TasksType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TasksType>
    removeTasks: (id: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void

}

export function Todolist(props: PropsType) {
    const [newTaskTitle, setNewTaskTitle] = useState('')

    const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            props.addTask(newTaskTitle);
            setNewTaskTitle('')
        }
    }
    const addTask = () => {
        props.addTask(newTaskTitle);
        setNewTaskTitle('')
    }

    const onAllClickHandler = () => props.changeFilter('all')
    const onActiveClickHandler = () => props.changeFilter('active')
    const onCompletedClickHandler = () => props.changeFilter('completed')


    return (
        <div>
            <h3>{props.title}</h3>
            <input value={newTaskTitle}
                   onChange={onNewTitleChangeHandler}
                   onKeyPress={onKeyPressHandler}
                /* onChange={(e) => {
                 setNewTaskTitle(e.currentTarget.value)*/

                /*    onKeyPress={ (e) => {
                if (e.charCode === 13) {
                    props.addTask(newTaskTitle);
                    setNewTaskTitle('')
                }
             }}*/
            />
            <button onClick={addTask}>+
            </button>
            {/*<button onClick={() => {
                props.addTask(newTaskTitle);
                setNewTaskTitle('')
            }}>+
            </button>*/}
            <ul>
                {
                    props.tasks.map(el => {
                        const onRemoveHandler = () => {
                            props.removeTasks(el.id)
                        }
                        const onChangeHandler = () => {

                        }
                        return <li key={el.id}>
                            <input type="checkbox"
                                   onChange={onChangeHandler}
                                   checked={el.isDone}/> <span>{el.title}</span>
                            <button onClick={onRemoveHandler}>x</button>
                        </li>
                    })
                }

            </ul>
            <div>
                <button onClick={onAllClickHandler}>All</button>
                <button onClick={onActiveClickHandler}>Active</button>
                <button onClick={onCompletedClickHandler}>Completed</button>
            </div>
        </div>

    );
}