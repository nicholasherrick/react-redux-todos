import React from 'react';
import TodoList from './TodoList';
import { Link, Route, Redirect } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>See Our Todos</h1>
      {/* Fancy anchor tags */}
      <p>
        <Link to='/todos'>See my todos!</Link>
      </p>
      <p>
        <Link to='/todos/new'>Add a todos</Link>
      </p>
      <Route path='/todos' component={TodoList} />
      {/* Render so we can redirect */}
      <Route exact path='/' render={() => <Redirect to='/todos' />} />
    </div>
  );
}

export default App;
