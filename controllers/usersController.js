const bcryptjs = require("bcryptjs");
const User = require("../models/User");
const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");


const db = require("../database/models");
const Op = db.Sequelize.Op
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
    const userToLogin = await db.User.findOne({where:{email:req.body.email}, include : ['role']});

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
  
  edit: async (req,res) => {
  
    const validations = validationResult(req);
    const userEdit = await db.User.findOne({where:{id:req.session.userLogged.id}});
    
    if (validations.errors.length > 0) {
      console.log(validations.mapped())
      if (req.file) {
        fs.unlinkSync(
          path.join(__dirname, "../public/images/users/", req.file.filename)
        );
      }
      return res.render("users/profile", {
        user: req.session.userLogged,
        errors: validations.mapped(),
      });
    }
    try {
      const checkMail = await db.User.count({where:{email:req.body.email,[Op.not]:{id:userEdit.id}}})

      if (checkMail < 1) {
        if(req.file){
          fs.unlinkSync(
            path.join(__dirname, "../public/images/users/", req.session.userLogged.avatar)
          );
        }
        let avatarPath = req.file ? req.file.filename : req.session.userLogged.avatar
        req.session.userLogged.first_name = req.body.firstName
        req.session.userLogged.email = req.body.email
        req.session.userLogged.last_name = req.body.lastName
        req.session.userLogged.avatar = avatarPath

        await userEdit.update({
          first_name: req.body.firstName,
          email: req.body.email,
          last_name: req.body.lastName,
          avatar: avatarPath
        });
      } else {
        return res.render("users/profile", {
          user:req.session.userLogged,
          errors: {email: {msg:'Ese email ya está en uso'}}
        })
      }
      res.redirect("./profile")
    } catch(e) {
      console.log(e.message)
      res.redirect("./profile")
    }
  
  }
};

module.exports = controller;
