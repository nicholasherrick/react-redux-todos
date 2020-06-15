const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const todoRoutes = require('./routes/todos');
const PORT = process.env.PORT || 3001;

// Use morgan for debug logging
app.use(morgan('tiny'));
// Parse json
app.use(bodyParser.json());
// Proxying
app.use(cors());
// API Routing
app.use('/api/todos', todoRoutes);
// 404 error handler
app.use(function (req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});
// error handling
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: err,
  });
});
// Start the server
app.listen(PORT, function () {
  console.log(`Server starting on port: ${PORT}`);
});
