const express = require('express');
const path = require('path')
const router = express.Router();
const controller = require('../controllers/usersController');
const multer = require('multer')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, "../public/images/users"));
    },
    filename: (req, file, cb) => {
      let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
      cb(null, fileName);
    }
  });
  
  const upload = multer({ storage });

router.get('/login', controller.login)
router.get('/register', controller.register)

router.post('/register', upload.single('pfpimg'),controller.newUser);

module.exports = router;

