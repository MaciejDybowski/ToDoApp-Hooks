import React from 'react'
import Task from '../Task';
import './Tasks.css';


function Tasks({tasks,deleteTask,updateTask}) {
    return (
        <div className = 'tasks'>
            {tasks.map((task) => <Task key={task.id} data={task} deleteTask={deleteTask} updateTask = {updateTask}/>)}
        </div>
    )
}

export default Tasks
