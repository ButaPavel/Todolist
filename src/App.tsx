import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {


    let [tasks, setTasks] = useState([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'React', isDone: false},
    ])
    let [filterTask, setFilterTask] = useState('All')


    const removeTask = (id: number) => {
        setTasks(tasks.filter((el) => el.id !== id))
    }

    const taskFilter = (filterValue: string) => {
        setFilterTask(filterValue)
    }

    let durshlag = tasks
    if (filterTask === 'Active') {
        durshlag = tasks.filter((el) => el.isDone)
    }
    if (filterTask === 'Completed') {
        durshlag = tasks.filter((el) => el.isDone)
    }


    return (
        <div className="App">
            <Todolist
                title='What to learn11111'
                tasks={durshlag}
                removeTask={removeTask}
                taskFilter={taskFilter}
            />
        </div>
    );
}

export default App;
