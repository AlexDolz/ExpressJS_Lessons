const knex = require("./knex");

function getAllUsers() {
  return knex("users").select("*");
}

function getUserById(userId) {
  return knex("users").select("*").where("id", userId);
}

function createNewUser(user) {
  return knex("users").insert(user);
}

module.exports = {
  getAllUsers,
  getUserById,
  createNewUser,
};
