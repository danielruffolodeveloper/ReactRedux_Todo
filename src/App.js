import React from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Filters from './components/Filters';
import logo from './test.svg'

function App() {
  return (
    <div className="container">

        <div class="jumbotron m-3">
          <img src={logo} height="150px"/>
          <h1 class="display-4">Your Todo List</h1>
          <p class="lead">Plan Your day ahead and feel productive!.</p>
          <hr class="my-4"/>
          <AddTodo />
          <TodoList />
          <Filters />
        </div>
   
    </div>
  );
}

export default App;