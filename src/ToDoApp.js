import React, { useState } from 'react';
import './ToDoApp.css';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import Task from './components/Task'

function ToDoApp() {
  const [tasks, setTasks] = useState([]);

  const deleteTask = (value) =>{
    setTasks(tasks.filter(item => item.value !== value));
  }

  return (
    <div className="ToDoApp">
      <h2 className='title'>ToDo List App</h2>
      <AddTask addTask={setTasks} tasks={tasks} />
      {/* <Tasks tasks = {tasks} /> */}
      {tasks.map((task) => <Task data={task} deleteTask={deleteTask}/>)}
    </div>
  );
}

export default ToDoApp;
