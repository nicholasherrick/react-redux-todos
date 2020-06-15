// Created action strings to be used anywhere in the application
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

// Created functions to link our actions to redux
export function addTodo(task) {
  return {
    type: ADD_TODO,
    task,
  };
}

export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id,
  };
}
