const { body } = require("express-validator");

module.exports = [
  body("name").notEmpty().withMessage("Debes ingresar un nombre").bail(),
  body("brand").notEmpty().withMessage("Debes ingresar una marca"),
  body("color").notEmpty().withMessage("Debes ingresar un color"),
  body("price").notEmpty().withMessage("Debes ingresar un precio"),
  body("category").notEmpty().withMessage("Debes seleccionar una categoría"),
  body("description").notEmpty().withMessage("Debes ingresar una descripción"),
];
