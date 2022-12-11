import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {
    const title1='November'
    const title2='December'

    let tasks1 = [
        { id: 1, title: 'HTML&CSS', isDone: true},
        { id: 2, title: 'JS', isDone: true},
        { id: 3, title: 'React', isDone: false},
    ]
    let tasks2 = [
        { id: 1, title: 'Hello world', isDone: true},
        { id: 2, title: 'I am Happy', isDone: false},
        { id: 3, title: 'You', isDone: false},
        { id: 4, title: 'You', isDone: false},
    ]

    return (
        <div className="App">
            <Todolist title={title1} tasks={tasks1} />
            <Todolist title={title2} tasks={tasks2} />

        </div>
    )
}
export default App;
