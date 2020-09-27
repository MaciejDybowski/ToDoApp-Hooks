import React from 'react'
import Task from '../Task';
import './Tasks.css';


function Tasks({tasks}) {
    return (
        <div className = 'tasks'>
            {tasks.map((task,i) => <Task key={i} data={task}/>)}
        </div>
    )
}

export default Tasks
