const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/contacts/:id", (req, res) => {
  let data = {
    title: "Contacts",
    username: req.params.id,
    languages: ["DE", "ENG", "IT", "FR", "LT"],
  };
  res.render("contacts", data);
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
