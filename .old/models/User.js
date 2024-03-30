const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const fileName = path.resolve(__dirname, "../data/users.json");

const User = {
  getData: function () {
    return JSON.parse(fs.readFileSync(fileName, "utf-8"));
  },

  findAll: function () {
    return this.getData();
  },

  getById: function (id) {
    return this.findAll().find((user) => user.id === id);
  },

  getByEmail: function (email) {
    return this.findAll().find((user) => user.email === email);
  },

  create: function (userData) {
    let allUsers = this.findAll();
    let newUser = {
      id: uuidv4(),
      ...userData,
    };
    allUsers.push(newUser);
    fs.writeFileSync(fileName, JSON.stringify(allUsers, null, " "));

    return newUser;
  },

  detele: function (id) {
    let finalUsers = this.findAll().filter((user) => user.id !== id);
    fs.writeFileSync(fileName, JSON.stringify(finalUsers, null, " "));
    return true;
  },

  update: function (id, updateUserData) {
    let allUsers = this.findAll();
    let updateUserIndex = allUsers.findIndex((user) => user.id === id);
    if (updateUserIndex !== -1) {
      allUsers[updateUserIndex] = {
        ...allUsers[updateUserIndex],
        ...updateUserData,
      };
      fs.writeFileSync(fileName, JSON.stringify(allUsers, null, " "));
      return true;
    } else {
      return null;
    }
  },
};

module.exports = User;
