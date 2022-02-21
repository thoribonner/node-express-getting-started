const { PORT = 5001 } = process.env;

const app = require("./app");

const listener = () => console.log(`listening very closely on Port ${PORT}!`);

app.listen(PORT, listener);