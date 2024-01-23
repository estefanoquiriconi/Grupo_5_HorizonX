const express = require("express");
const session = require("express-session");
const cookies = require("cookie-parser");
const methodOverride = require("method-override");
const path = require("path");
const userLoggedMiddleware = require("./middlewares/userLoggedMiddleware.js");

const port = 8080;
const app = express();

app.listen(port, () => {
  console.log(`Servidor habilitado http://localhost:${port}`);
});

app.set("view engine", "ejs");
app.use(express.static(path.resolve("./public")));
app.use(
  session({
    secret: "decreto secreto",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(cookies());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(userLoggedMiddleware);

const mainRoutes = require("./routers/main.routes");
const usersRoutes = require("./routers/users.routes");
const productsRoutes = require("./routers/products.routes");

express.Router().use(function (req, res, next) {
  res.locals.session = req.session;
  next();
});

app.use("/", mainRoutes);
app.use("/users", usersRoutes);
app.use("/products", productsRoutes);
