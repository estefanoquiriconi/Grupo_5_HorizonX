const path = require("path");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(__dirname, "../public/images/products"));
  },
  filename: (req, file, cb) => {
    let fileName = `${uuidv4()}_img${path.extname(file.originalname)}`;
    cb(null, fileName);
  },
});

const uploadProductMiddleware = multer({ storage });

module.exports = uploadProductMiddleware;
