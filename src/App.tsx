import React, {useState} from 'react';
import './App.css';
import {TasksType, Todolist} from "./Todolist";
import {v1} from "uuid";

export type  FilterValuesType = 'all' | 'completed' | 'active';

function App() {

    let [tasks, setTasks] = useState<Array<TasksType>>([
        {id: v1(), title: 'CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'React', isDone: false},
        {id: v1(), title: 'Redux', isDone: false},
    ])

    function removeTasks(id: string) {
        let filteredTasks = tasks.filter(el => el.id !== id)
        setTasks(filteredTasks)
    }

    function addTask(title: string) {
        let newTask = {
            id: v1(),
            title: title,
            isDone: false
        }
        let newTasks = [newTask, ...tasks] // ... дистурикризация массива (поэлементно)
        setTasks(newTasks)
    }

    let [filter, setFilter] = useState<FilterValuesType>('all')

    let taskForTodolist = tasks;

    if (filter === 'completed') {
        taskForTodolist = tasks.filter(el => el.isDone)
    }
    if (filter === 'active') {
        taskForTodolist = tasks.filter(el => !el.isDone)
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }

    function changeStatus(taskId: string, isDone: boolean) {
        let task = tasks.find(t => t.id === taskId)
        if (task) {
            task.isDone = isDone;
        }
        setTasks([...tasks])
    }


    return (
        <div className="App">
            <Todolist title='What to learn'
                      tasks={taskForTodolist}
                      removeTasks={removeTasks}
                      changeFilter={changeFilter}
                      addTask={addTask}
                      changeStatus={changeStatus}
                      filter={filter}
            />
        </div>
    )
}
export default App;
