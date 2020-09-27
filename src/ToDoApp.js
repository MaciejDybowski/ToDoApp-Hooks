import React from 'react';
import './ToDoApp.css';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';

function ToDoApp() {
  return (
    <div className="ToDoApp">
      <AddTask />
      <Tasks />
    </div>
  );
}

export default ToDoApp;
