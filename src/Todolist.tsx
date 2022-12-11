import React from "react";


type TasksType = {
    taskId: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TasksType>
    students: Array<string>
}
export function  Tasks(props: PropsType) {
    return (

        <div>
            <h3>{props.data.title}</h3>

        </div>

    );
}