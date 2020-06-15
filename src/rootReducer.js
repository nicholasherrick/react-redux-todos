// first import our action methods from the actionCreators file
import { ADD_TODO, REMOVE_TODO } from './actionCreators';

// Set intial state
const initialState = {
  todos: [],
  id: 0,
};

// here is our logic for handling actions, passing in state and the action and setting our state to the initial state if no state is passed in
export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      let newState = { ...state };
      newState.id++;
      return {
        ...newState,
        todos: [...newState.todos, { task: action.task, id: newState.id }],
      };
    case REMOVE_TODO:
      let todos = state.todos.filter((val) => val.id !== action.id);
      return { ...state, todos };
    default:
      return state;
  }
}
