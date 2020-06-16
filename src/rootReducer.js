// first import our action methods from the actionCreators file
import { GET_TODOS, ADD_TODO, REMOVE_TODO } from './actionCreators';

// Set intial state
const initialState = {
  todos: [],
  // Mongoose will track the ids
};

// here is our logic for handling actions, passing in state and the action and setting our state to the initial state if no state is passed in
export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TODOS:
      return { ...state, todos: action.data };
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.todo] };
    case REMOVE_TODO:
      let todos = state.todos.filter((val) => val._id !== action.id);
      return { ...state, todos };
    default:
      return state;
  }
}
