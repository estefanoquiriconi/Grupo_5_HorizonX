const path = require("path");
const express = require("express");
const session = require("express-session");
const cookies = require("cookie-parser");
const methodOverride = require("method-override");
const cors = require('cors');

const userLoggedMiddleware = require("./middlewares/userLoggedMiddleware.js");
const authMiddleware = require("./middlewares/authMiddleware");

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
app.use(express.json());
app.use(cors());

const mainRoutes = require("./routers/main.routes");
const usersRoutes = require("./routers/users.routes");
const productsRoutes = require("./routers/products.routes");
const cartRoutes = require('./routers/cart.routes.js');

const apiProductsRoutes = require('./routers/api/productsAPI.routes.js');
const apiProductImageRoutes = require('./routers/api/productImageAPI.routes.js')
const apiCategoriesRoutes = require('./routers/api/categoriesAPI.routes.js');
const apiUsersRoutes = require('./routers/api/userAPI.routes.js');

express.Router().use(function (req, res, next) {
  res.locals.session = req.session;
  next();
});

app.use("/", mainRoutes);
app.use("/users", usersRoutes);
app.use("/products", productsRoutes);
app.use("/cart", authMiddleware, cartRoutes);

app.use("/api/products", apiProductsRoutes);
app.use("/api/productImage", apiProductImageRoutes)
app.use("/api/categories", apiCategoriesRoutes);
app.use("/api/users",apiUsersRoutes)
