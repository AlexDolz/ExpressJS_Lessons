const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello world!</h1>");
});

app.get("/contacts/:id", (req, res) => {
  res.send(`<h1>users id: ${req.params.id}</h1>`);
});
app.get("/users/:usersname/:id", (req, res) => {
  res.send(
    `<h1>users name: ${req.params.usersname}. users id: ${req.params.id} id</h1>`
  );
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is started on address: http://localhost:${PORT}`);
});
