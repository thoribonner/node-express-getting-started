const express = require("express");
const morgan = require("morgan");

const app = express();

// * req = request
// * res = response
// * next = tells express that this middleware function is complete

// * sayHello sends response
// const sayHello = (req, res, next) => {
//   console.log(req.query);
//   const name = req.query.name;
//   const content = name ? `hello, ${name}!` : "Hello!";
//   res.send(content);
// };

// const saySomething = (req, res) => {
//   const greeting = req.params.greeting;
//   const name = req.query.name;
//   const content = greeting && name ? `${greeting} ${name}!` : `${greeting}!`;
//   res.send(content);
// };

// const sayGoodbye = (req, res) => {
//   res.send("Sorry to see you go!");
// };

// * logging tells express this function is complete
// const logging = (req, res, next) => {
//   console.log("A request is being made");
//   next();
// };

// const log = (req, res, next) => {
//   fs.appendFile("log.txt", [date] - {Request Made}\n, (err) => {
//       // do nothing
//   })

// }

app.use((req, res, next) => {
  console.log("A request is being made");
  next();
});

app.use(morgan("dev"));

app.use("/hello", (req, res) => {
  console.log(req.query);
  const name = req.query.name;
  const content = name ? `hello, ${name}!` : "Hello!";
  res.send(content);
});

app.get("/say/goodbye", (req, res) => {
  res.send("Sorry to see you go!");
});

app.get("/say/:greeting", (req, res) => {
  const greeting = req.params.greeting;
  const name = req.query.name;
  const content = greeting && name ? `${greeting} ${name}!` : `${greeting}!`;
  res.send(content);
});

app.get("/states/:abbreviation", (req, res, next) => {
  const abbreviation = req.params.abbreviation;
  abbreviation.length !== 2
    ? next("State abbreviation is invalid.")
    : res.send(`${abbreviation} is a nice state, I'd like to visit.`);
});

app.use((req, res) => {
  res.send(`The route ${req.path} does not exist!`);
});

app.use((err, req, res, next) => {
  console.error(err);
  res.send(err);
});

module.exports = app;
