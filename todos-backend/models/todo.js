const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todos-backend');
// enable mongoose debugging
mongoose.set('debug', true);
// enable ES2015 promise handling with mongoose
mongoose.Promise = Promise;
// Create schema
const todoSchema = new mongoose.Schema({
  task: String,
});
// Create model
const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
