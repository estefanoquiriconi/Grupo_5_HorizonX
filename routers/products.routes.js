const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const controller = require("../controllers/productsController");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(__dirname, "../public/images/products"));
  },
  filename: (req, file, cb) => {
    let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
    cb(null, fileName);
  }
});

const upload = multer({ storage });

//Todos los productos
router.get("/", controller.index);

//Detalle de un producto
router.get("/detail/:id", controller.detail);

//Crear un producto
router.get("/create", controller.create);
router.post("/create", upload.single('image'), controller.store);

router.get("/create", controller.create);

router.get("/edit", controller.edit);

router.get("/productCart", controller.productCart);

module.exports = router;
