const express = require("express");
const path = require("path");
const port = 8080;

const app = express();

app.listen(port, () => {
    console.log(`Servidor habilitado http://localhost:${port}`);
});
app.set('view engine','ejs');
app.use(express.static(path.resolve("./public")));

app.get("/", (req, res)=>{
    res.render("index");
})

app.get("/register", (req,res) => {
    res.render("register");
})

app.get("/detail", (req,res) => {
    res.render("detail");
})  

app.get("/login", (req,res) => {
    res.render('login');
})

app.get("/productCart", (req,res) => {
    res.render("productCart");
})
