import React from "react";


type TasksType = {
    taskId: number
    title: string
    isDone: boolean
}

type DataType = {
    title: string
    tasks: Array<TasksType>
    students: Array<string>
}

type PropsType = {
    data: DataType
}

export function Tasks(props: PropsType) {
    return (

        <div>

            <h3>{props.data.title}</h3>

            <ul>
                {props.data.tasks.map(t => {
                    return (
                        <li>
                            <span>{t.taskId}</span>
                            <span>{t.title}</span>
                        </li>
                    )
                })}
            </ul>

            <ul>
                {props.data.students.map(t => {
                    return (
                        <li>{t}</li>
                    )
                })}
            </ul>

        </div>

    );
}