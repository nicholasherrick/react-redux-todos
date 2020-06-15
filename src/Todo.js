import React from 'react';

// pull out the task and removeTodo function from props
const Todo = ({ task, removeTodo }) => (
  <li>
    {task}
    {/* Our button needs an onClick to use the RemoveTodo function */}
    <button onClick={removeTodo}>X</button>
  </li>
);

export default Todo;
