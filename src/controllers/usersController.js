const { validationResult } = require("express-validator");
const userModel = require("../models/user");

module.exports = {
  login: (req, res) => {
    res.render("users/login", { style: "login", title: "Iniciar sesión" });
  },

  processLogin: (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);  
      res.status(404).send("<h1>Algo salio mal :(</h1>")
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
      console.log(errors.errors);
    } else {
      userModel.create(req.body, req.file);
      return res.redirect("/users/login");
    }
  },

  profile: (req, res) => res.render("users/profile", { title: "Perfil", user: req.session.user }),
  
  logout: (req, res) => {
    delete req.session.user;
    return res.redirect("/");
  },
};
