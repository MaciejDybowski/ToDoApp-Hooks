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

  const updateTask = (id) => {
    console.log(id);
    let index = tasks.findIndex((task) => task.id === id);
    console.log(index);
    let newArray = [...tasks];
    console.log(newArray);
    newArray[index].checked = !newArray[index].checked;
    setTasks(newArray);
  }

  return (
    <div className="ToDoApp">
      <h2 className='title'>ToDo List App</h2>
      <AddTask addTask={setTasks} tasks={tasks} />
      {tasks.map((task) => <Task key={task.id} data={task} deleteTask={deleteTask} updateTask = {updateTask}/>)}
    </div>
  );
}

export default ToDoApp;
