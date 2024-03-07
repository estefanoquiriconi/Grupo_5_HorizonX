const { body } = require("express-validator");
const path = require("path");

module.exports = [
  body("firstName")
    .notEmpty()
    .withMessage("Debes ingresar un nombre")
    .bail()
    .isLength({ min: 3 })
    .withMessage("El nombre debe contener como mínimo 3 caracteres")
    .bail()
    .isAlpha("es-ES", { ignore: " " })
    .withMessage("El nombre debe contener solo letras"),
  body("lastName")
    .notEmpty()
    .withMessage("Debes ingresar un apellido")
    .bail()
    .isLength({ min: 3 })
    .withMessage("El apellido debe contener como mínimo 3 caracteres")
    .isAlpha("es-ES", { ignore: " " })
    .withMessage("El apellido debe contener solo letras"),
  body("email")
    .notEmpty()
    .withMessage("Debes ingresar un email")
    .bail()
    .isEmail()
    .withMessage("Debes ingresar un email válido")
    .bail(),
  body("image").custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = [".jpg", ".png"];
    if (file) {
      let fileExtension = path.extname(file.originalname);
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(
          `Las extensiones permitidas son ${acceptedExtensions.join(", ")}`
        );
      }
    }
    return true;
  }),
];
