import React from "react";
import {FilterValuesType} from "./App";


export type TasksType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TasksType>
    removeTasks: (id: number) => void
    changeFilter: (value:FilterValuesType) => void


}
export function  Todolist(props: PropsType) {
    return (

        <div>
            <h3>{props.title}</h3>

            <ul>
                {
                 /*   props.tasks.map( (el) => {
                     /  return <li><input type="checkbox" checked={el.isDone}/> <span>{el.title}</span></li>
                    })               можно и так*/

                   props.tasks.map( el => <li><input type="checkbox" checked={el.isDone}/> <span>{el.title}</span>
                   <button onClick={ () => { props.removeTasks(el.id)} }>x</button>
                   </li>
                    )
                }
               {/* <li><input type="checkbox" checked={props.tasks[0].isDone}/> <span>{props.tasks[0].title}</span></li>
                <li><input type="checkbox" checked={props.tasks[1].isDone}/> <span>{props.tasks[1].title}</span></li>
                <li><input type="checkbox" checked={props.tasks[2].isDone}/> <span>{props.tasks[2].title}</span></li>*/}

            </ul>
            <div>
                <button onClick={ () => { props.changeFilter('all')} }>All</button>
                <button onClick={ () => { props.changeFilter('active')} }>Active</button>
                <button onClick={ () => { props.changeFilter('completed')} }>Completed</button>
            </div>
        </div>

    );
}