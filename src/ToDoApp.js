import React, { useState } from 'react';
import './ToDoApp.css';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';

function ToDoApp() {
  const [tasks, setTasks] = useState([]);
  return (
    <div className="ToDoApp">
      <h2 className='title'>ToDo List App</h2>
      <AddTask addTask={setTasks} tasks={tasks} />
      <Tasks tasks = {tasks} />
    </div>
  );
}

export default ToDoApp;
