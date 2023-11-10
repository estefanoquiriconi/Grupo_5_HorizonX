const express = require("express");
const path = require("path");
const port = 8080;

const app = express();

app.use(express.static(path.resolve("./public")));

app.listen(port, ()=>{
    console.log(`Server corriendo en http://localhost:${port}`);
})

app.get("/", (req, res)=>{
    res.sendFile(path.resolve("./views/index.html"));
})

app.get("/register", (req,res) => {
    res.sendFile(path.resolve("./views/register.html"));
})

app.get("/Detail", (req,res) => {
    res.sendFile(path.resolve("./views/Detail.html"));
})