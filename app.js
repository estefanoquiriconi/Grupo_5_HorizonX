const express = require("express");
const path = require("path");
const port = 8080;

const app = express();

app.use(express.static(path.resolve("./public")));

app.get("/", (req, res)=>{
    res.sendFile(path.resolve("./views/index.html"));
})

app.get("/cart", (req, res)=>{
    res.sendFile(path.resolve("./views/productCart.html"));
})

app.listen(port, ()=>{
    console.log(`Server corriendo en http://localhost:${port}`);
})



