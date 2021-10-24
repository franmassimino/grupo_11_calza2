const { validationResult } = require("express-validator");
const db = require('../database/models/index')
const { User } = db

module.exports = {
  login: (req, res) => {
    res.render("users/login", { style: "login", title: "Iniciar sesión" });
  },

  register: (req, res) => {
    res.render("users/register", { style: "register", title: "Registrarse" });
  },

  processLogin: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.redirect('/404')
      console.log(errors)
    } else {
      let user = await User.findOne({ where: { email: req.body.email } });
      delete user.password;
      req.session.user = user;
      user ? res.redirect("/") : res.send("Error al cargar la informacion");
    }
  },

  processRegister: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.redirect('/404')
      console.log(errors)
    } else {
      try {
        let data = {
          ...req.body,
          img: req.file ? `/img/uploads/users/${req.file.filename}` : '/img/uploads/users/default.png',
        }
        let created = User.create(data);
        created ? res.redirect("/users/login") : res.send("Error al cargar la informacion")
      } catch (e) {
        console.log(e)
        res.redirect('/404')
      }
    }
  },

  profile: (req, res) => res.render("users/profile", { title: "Perfil", style: "profile", user: req.session.user }),

  destroy: async (req, res) => {
    try{
      let user = User.findByPk(req.session.user.id)
      let deleted = User.destroy(user)
      deleted ? res.redirect("/") : res.send("Error al cargar la informacion");
    } catch (e) {
      console.log(e)
      res.redirect('/404')
    }
  },

  logout: (req, res) => {
    delete req.session.user;
    return res.redirect("/");
  },
};
