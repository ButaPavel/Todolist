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
    changeStatus: (taskId: string, isDone: boolean) => void
    filter: FilterValuesType

}

export function Todolist(props: PropsType) {
    const [newTaskTitle, setNewTaskTitle] = useState('')
    const [error, setError] = useState<string | null> (null)

    const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (e.charCode === 13) {
            props.addTask(newTaskTitle);
            setNewTaskTitle('')
        }
    }
    const addTask = () => {
        if (newTaskTitle.trim() !== '') {
            props.addTask(newTaskTitle);
            setNewTaskTitle('')
        } else {
            setError('Filed is required')

        }

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
                   className={error ? 'error' : ''}
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
            {error && <div className='error-message'>{error}</div>}
            <ul>
                {
                    props.tasks.map(el => {
                        const onRemoveHandler = () => {
                            props.removeTasks(el.id)
                        }
                        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                            props.changeStatus(el.id, e.currentTarget.checked)
                        }

                        return <li key={el.id} className={el.isDone ? 'is-done': ''}>
                            <input type="checkbox"
                                   onChange={onChangeHandler}
                                   checked={el.isDone}
                            />
                            <span>{el.title}</span>
                            <button onClick={onRemoveHandler}>x</button>

                        </li>
                    })
                }

            </ul>
            <div>
                <button className={props.filter === 'all' ? 'active-filter' : ''} onClick={onAllClickHandler}>All</button>
                <button className={props.filter === 'active' ? 'active-filter' : ''} onClick={onActiveClickHandler}>Active</button>
                <button className={props.filter === 'completed' ? 'active-filter' : ''} onClick={onCompletedClickHandler}>Completed</button>
            </div>
        </div>

    );
}