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
const usersRoutes = require('./routers/users.routes')
const productsRoutes = require('./routers/products.routes')

app.use("/", mainRoutes);
app.use("/users", usersRoutes);
app.use("/products", productsRoutes);