import React, {useState} from 'react';
import './App.css';
import {TasksType, Todolist} from "./Todolist";

export type  FilterValuesType = 'all' | 'completed' | 'active';

function App() {

    /*  let tasks2 = [
          { id: 1, title: 'Ter', isDone: true},
          { id: 2, title: 'XXX', isDone: false},
          { id: 3, title: 'Ret', isDone: false},
      ]*/

    /* let arr = useState(initTasks);
     let tasks = arr[0];
     let setTasks = arr [1];*/
    let [tasks, setTasks] = useState<Array<TasksType>>([
        {id: 1, title: 'CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'React', isDone: false},
        {id: 4, title: 'Redux', isDone: false},
    ])
    let [filter, setFilter] = useState<FilterValuesType>('all')

    function removeTasks(id: number) {
        let filteredTasks = tasks.filter(el => el.id !== id)
        setTasks(filteredTasks)
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }


    let taskForTodolist = tasks;
    if (filter === 'completed') {
        taskForTodolist = tasks.filter(el => el.isDone === true)
    }
    if (filter === 'active') {
        taskForTodolist = tasks.filter(el => el.isDone === false)
    }

    return (
        <div className="App">
            <Todolist title='What to learn'
                      tasks={taskForTodolist}
                      removeTasks={removeTasks}
                      changeFilter={changeFilter}
            />
            {/*      <Todolist title='Movies' tasks={tasks2} />*/}

        </div>
    )
}

export default App;
