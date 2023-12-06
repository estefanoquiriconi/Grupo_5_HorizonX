const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require("uuid");
const usersPath = path.resolve(__dirname, '../data/users.json');
const userList = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));
const jFunc = require('../public/js/jsonFuncs');
const { log } = require('console');


const controller = {

    login: (req, res)=>{
        res.render("users/login");
    },

    register: (req, res)=>{
        res.render("users/register");
    },

    newUser: (req,res) => {
        let go = true;
        if (req.body.pass != req.body.repass) {
            res.send("Las contraseñas no concuerdan")
            go = false
        }
        
        if (req.body.check == undefined) {
            go = false
            res.send("No chequeaste los términos y condiciones")
        }
        
        if (go) {
            let save = {
                id: uuidv4(),
                nombre:req.body.nombre,
                apellido:req.body.apellido,
                mail:req.body.mail,
                pass:req.body.pass,
                pfp_img: req.file?.filename || 'images/default-user-img.jpg'
                    
            }
            jFunc.newData(save, userList, usersPath)
            res.redirect("/")
        }

    }

}

module.exports = controller;