const express = require("express");

const PORT = 3333;

const app = express();
const db = require("./db/users");

const cors = require("cors");
app.use(cors());

const bodyparser = require("body-parser");
app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);
app.use(bodyparser.json());

app.get("/users", async (req, res) => {
  const data = await db.getAllUsers();
  res.json(data);
});

app.get("/users/:id", async (req, res) => {
  const user = await db.getUserById(req.params.id);
  res.json(user[0]);
});

app.post("/post", (req, res) => {
  res.send("TEST!");
});

app.get("/home", (req, res) => {
  res.json({ test: "hello" });
});

app.listen(PORT, () => {
  console.log(`Server start http://localhost:${PORT}`);
});
