import React from "react";


type TasksType = {
    id: number
    title: string
    isDone: boolean
}

type TodolistPropsType = {
    title: string
    tasks: Array<TasksType>
}

export function Todolist(props: TodolistPropsType) {
    return (

        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map(el =>{
                    return(
                        <li><input type="checkbox" checked={el.isDone}/> <span>{el.title}</span></li>
                    )
                })
                }
            </ul>
            <div>
                <button>A ll</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>

    );
}