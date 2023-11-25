const express = require("express");
const path = require("path");
const port = 8080;

const app = express();

app.listen(port, () => {
    console.log(`Servidor habilitado http://localhost:${port}`);
});
app.set('view engine','ejs');
app.use(express.static(path.resolve("./public")));

const mainRoutes = require('./routers/main.routes');

app.use("/", mainRoutes);

app.get("/register", (req,res) => {
    res.render("./users/register");
})

app.get("/detail", (req,res) => {
    res.render("./products/detail");
})  

app.get("/login", (req,res) => {
    res.render('./users/login');
})

app.get("/productCart", (req,res) => {
    res.render("./products/productCart");
})
