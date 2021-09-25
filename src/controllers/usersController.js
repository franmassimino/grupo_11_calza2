const { validationResult } = require("express-validator");
const userModel = require("../models/user");

module.exports = {
  login: (req, res) => {
    res.render("users/login", { style: "login", title: "Iniciar sesión" });
  },

  register: (req, res) => {
    res.render("users/register", { style: "register", title: "Registrarse" });
  },

  processLogin: (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(404).send(errors)
    } else {
      let user = userModel.findByEmail(req.body.email);
      delete user.password;
      req.session.user = user;
      user ? res.redirect("/") : res.send("Error al cargar la informacion");
    }
  },

  processRegister: (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.send(`Hay errores`);
    } else {
      userModel.create(req.body, req.file);
      return res.redirect("/users/login");
    }
  },

  profile: (req, res) => res.render("users/profile", { title: "Perfil",  style: "login", user: req.session.user }),
  
  logout: (req, res) => {
    delete req.session.user;
    return res.redirect("/");
  },
};
