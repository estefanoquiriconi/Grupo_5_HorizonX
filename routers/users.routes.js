const express = require("express");
const controller = require("../controllers/usersController");

const uploadAvatarMiddleware = require("../middlewares/uploadAvatarMiddleware");
const validateRegister = require('../middlewares/userRegisterValidationMiddleware');
const validateLogin = require('../middlewares/userLoginValidationMiddleware');

const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get("/login", guestMiddleware, controller.login);
router.get("/register", guestMiddleware, controller.register);
router.get("/profile", authMiddleware, controller.profile);
router.post(
  "/register",
  uploadAvatarMiddleware.single("avatar"),
  validateRegister,
  controller.processRegister
);
router.post("/login",validateLogin, controller.processLogin);
router.get('/logout', controller.logout);

module.exports = router;
