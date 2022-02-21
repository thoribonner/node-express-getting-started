const express = require('express');
const morgan = require('morgan');

const app = express();

// * req = request
// * res = response
// * next = tells express that this middleware function is complete

// * sayHello sends response
const sayHello = (req, res, next) => {
  res.send('Hello!');
}


// // * logging tells express this function is complete
// const logging = (req, res, next) => {
//   console.log("A request is being made");
//   next();
// }

// const log = (req, res, next) => {
//   fs.appendFile("log.txt", [date] - {Request Made}\n, (err) => {
//       // do nothing
//   })
  
// }

// app.use(logging);
app.use(morgan('dev'))
app.use(sayHello);

module.exports = app;