const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(__dirname, "../public/images/users"));
  },
  filename: (req, file, cb) => {
    let fileName = `${Date.now()}${path.extname(file.originalname)}`;
    cb(null, fileName);
  },
});

const uploadAvatarMiddleware = multer({ storage });

module.exports = uploadAvatarMiddleware;
