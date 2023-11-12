const express = require("express");
const path = require("path");
const port = 8080;

const app = express();

app.listen(port, () => {
    console.log(`Servidor habilitado http://localhost:${port}`);
});

app.use(express.static(path.resolve("./public")));

app.get("/", (req, res)=>{
    res.sendFile(path.resolve("./views/index.html"));
})

app.get("/register", (req,res) => {
    res.sendFile(path.resolve("./views/register.html"));
})

app.get("/detail", (req,res) => {
    res.sendFile(path.resolve("./views/detail.html"));
})  

app.get("/login", (req,res) => {
    res.sendFile(path.resolve("./views/login.html"));
})

app.get("/productCart", (req,res) => {
    res.sendFile(path.resolve("./views/productCart.html"));
})
