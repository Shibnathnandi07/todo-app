
import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import StoreProvider from './store/store';
import './App.css';

const App = () => {
  return (
    <StoreProvider>
      <div className="app-container">
        <h1>To-Do List</h1>
        <TaskInput />
        <TaskList />
      </div>
    </StoreProvider>
  );
};

export default App;
