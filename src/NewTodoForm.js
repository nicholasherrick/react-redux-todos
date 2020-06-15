import React, { Component } from 'react';

export default class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
    };
    // Important: dont forget to bind all our methods to keyword this
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    //   We can use this to dispatch the add todo action
    // this.props.dispatch({
    //   type: 'ADD_TODO',
    //   task: this.state.task,
    // });
    // But we'll just use our imported dispatch action passing in our form entry from the react state
    this.props.handleSubmit(this.state.task);
    // Reset form
    e.target.reset();
    // Makes react router render the new todo form
    this.props.history.push('/todos'); // This comes from {...props} in the router from TodoList.js
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='task'>Task </label>
        <input type='text' name='task' id='task' onChange={this.handleChange} />
        <button>Add a Todo</button>
      </form>
    );
  }
}
