import React, { Component } from 'react';
import Todo from './Todo';
// Import this to connect react to redux
import { connect } from 'react-redux';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
    };
    // Important: dont forget to bind all our methods to keyword this
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    //   Use this to dispatch the add todo action
    this.props.dispatch({
      type: 'ADD_TODO',
      task: this.state.task,
    });
    // Reset form
    e.target.reset();
  }

  removeTodo(id) {
    //   Use this to dispatch the remove todo action, remember to pass in the id
    this.props.dispatch({
      type: 'REMOVE_TODO',
      id,
    });
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
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='task'>Task </label>
          <input
            type='text'
            name='task'
            id='task'
            onChange={this.handleChange}
          />
          <button>Add a Todo</button>
        </form>

        <ul>{todos}</ul>
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

// must export with connect method, passing in mapStateToProps and returning TodoList function
export default connect(mapStateToProps)(TodoList);
