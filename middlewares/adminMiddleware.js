function adminMiddleware(req, res, next) {
    if (req.session.userLogged.role.name != "administrador") {
      return res.redirect("/");
    }
  
    next();
  }
  
  module.exports = adminMiddleware;