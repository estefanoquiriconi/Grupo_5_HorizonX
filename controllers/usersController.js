const bcryptjs = require("bcryptjs");
const User = require("../models/User");
const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");

const db = require("../database/models");
const controller = {
  login: (req, res) => {
    res.render("users/login");
  },

  logout : (req, res) => {
    res.clearCookie('userEmail');
    req.session.destroy();
    return res.redirect('/');
  },

  processLogin: async (req, res) => {
    const validations = validationResult(req);
    //const userToLogin = User.getByEmail(req.body.email);
    const userToLogin = await db.User.findOne({where:{email:req.body.email}});

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
      const rol = await db.Role.findByPk(userToLogin.role_id)
      req.session.userLogged.dataValues.role = rol.name

      if (req.body.rememberUser) {
        res.cookie("userEmail", req.body.email, { maxAge: 1000 * 60 * 60 });
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

  processRegister: async (req, res) => {
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

    //let userInDB = User.getByEmail(req.body.email);
    let userInDB = await db.User.findOne({where:{email:req.body.email}});

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
    let { firstName, lastName,email, password } = req.body
    let userToCreate = {
      first_name:firstName,
      last_name:lastName,
      email:email,
      //...req.body,
      password: bcryptjs.hashSync(password, 10),
      avatar: req.file?.filename || "default-avatar-image.png",
      role_id: 2,
      //role:'cliente'
    };

    //User.create(userToCreate);
    const createdUser = await db.User.create(userToCreate);

    //Carrito para el nuevo usuario
    await db.Cart.create({
      user_id : createdUser.id,
      total_price : 0.00
    })
    
    return res.redirect("/users/login");
  },
};

module.exports = controller;
