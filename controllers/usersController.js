const bcryptjs = require("bcryptjs");
const User = require("../models/User");
const fs = require('fs');
const path = require('path');

const controller = {
  login: (req, res) => {
    res.render("users/login");
  },

  register: (req, res) => {
    res.render("users/register");
  },

  processRegister: (req, res) => {
    let userInDB = User.getByEmail(req.body.email);

    if (userInDB) {
      if (req.file) {
        fs.unlinkSync(
          path.join(__dirname, "../public/images/users/", req.file.filename)
        );
      }
      return res.render("users/register", {
        errors: {
          email: {
            msg: "Este email ya está registrado!",
          },
        },
        oldData: req.body,
      });
    }

    let userToCreate = {
        ...req.body,
        password : bcryptjs.hashSync(req.body.password, 10),
        avatar : req.file?.filename || 'default-avatar-image.png',
        role : 'cliente'
    }

    User.create(userToCreate);

    return res.redirect('/users/login');

  },
};

module.exports = controller;
