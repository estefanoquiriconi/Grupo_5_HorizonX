const bcryptjs = require("bcryptjs");
const User = require("../models/User");
const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");

const controller = {
  login: (req, res) => {
    res.render("users/login");
  },

  logout : (req, res) => {
    res.clearCookie('userEmail');
    req.session.destroy();
    return res.redirect('/');
  },

  processLogin: (req, res) => {
    const validations = validationResult(req);
    let userToLogin = User.getByEmail(req.body.email);

    if (validations.errors.length > 0) {
      return res.render("users/login", {
        errors: validations.mapped(),
        oldData: req.body,
      });
    }
    if (!userToLogin) {
      return res.render("users/login", {
        errors: {
          email: {
            msg: "Credenciales inválidas",
          },
        },
        oldData: req.body,
      });
    }
    let passwordOk = bcryptjs.compareSync(
      req.body.password,
      userToLogin.password
    );
    if (passwordOk) {
      delete userToLogin.password;
      req.session.userLogged = userToLogin;

      if (req.body.rememberUser) {
        res.cookie("userEmail", req.body.email, { maxAge: 1000 * 60 });
      }

      return res.redirect("./profile");
    }

    return res.render("users/login", {
      errors: {
        email: {
          msg: "Credenciales inválidas",
        },
      },
      oldData: req.body,
    });
  },

  profile: (req, res) => {
    res.render("users/profile", { user: req.session.userLogged });
  },

  register: (req, res) => {
    res.render("users/register");
  },

  processRegister: (req, res) => {
    const validations = validationResult(req);

    if (validations.errors.length > 0) {
      if (req.file) {
        fs.unlinkSync(
          path.join(__dirname, "../public/images/users/", req.file.filename)
        );
      }
      return res.render("users/register", {
        errors: validations.mapped(),
        oldData: req.body,
      });
    }

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
      password: bcryptjs.hashSync(req.body.password, 10),
      avatar: req.file?.filename || "default-avatar-image.png",
      role: "cliente",
    };

    User.create(userToCreate);

    return res.redirect("/users/login");
  },
};

module.exports = controller;
