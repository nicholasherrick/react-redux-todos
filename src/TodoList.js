import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
// Import this to connect react to redux
import { connect } from 'react-redux';
// Import our dispatch function actions
import { addTodo, removeTodo } from './actionCreators';
import { Route } from 'react-router-dom';

class TodoList extends Component {
  constructor(props) {
    super(props);
    // Important: dont forget to bind all our methods to keyword this
    this.handleAdd = this.handleAdd.bind(this);
  }

  // handles the add todo action coming from the form component
  handleAdd(val) {
    this.props.addTodo(val);
  }

  removeTodo(id) {
    //   We can use this to dispatch the remove todo action, remember to pass in the id
    // this.props.dispatch({
    //   type: 'REMOVE_TODO',
    //   id,
    // });
    // But we'll just use our imported dispatch action passing in id
    this.props.removeTodo(id);
  }

  render() {
    //   Now we can access state that get passed in using this.props and map over the todos grabbing the value of each one with val.task
    let todos = this.props.todos.map((val, index) => (
      <Todo
        // We also pass the removeTodo function into each Todo and .bind it with the correct id (val.id) and remember to pass in keyword this
        removeTodo={this.removeTodo.bind(this, val.id)}
        task={val.task}
        key={index}
      />
    ));

    return (
      <div>
        {/* When we go to /todos/new render the NewTodoForm component */}
        <Route
          path='/todos/new'
          component={(props) => (
            // Remember to pass in props
            <NewTodoForm {...props} handleSubmit={this.handleAdd} />
          )}
        />
        {/* Whenever we go the path /todos, make react render all the todos */}
        <Route exact path='/todos' component={() => <div>{todos}</div>} />
      </div>
    );
  }
}

// mapStateToProps must return an object
// reduxState is passed in first
function mapStateToProps(reduxState) {
  // This function takes in the state from redux and turns it into props that pass into the component
  return {
    todos: reduxState.todos,
  };
}

// Better way to dispatch actions than using this.props.dispatch, but we will still just import our dispatch action functions from the actionCreators.js file
// function mapDispatchToProps(dispatch) {
//   return {
//     addTodo: function (task) {
//       dispatch({
//         type: 'ADD_TODO',
//         task,
//       });
//     },
//   };
// }

// must export with connect method, passing in mapStateToProps, our dispatch action functions (sometimes done with mapDispatchToProps) and returning TodoList function
export default connect(mapStateToProps, { addTodo, removeTodo })(TodoList);
