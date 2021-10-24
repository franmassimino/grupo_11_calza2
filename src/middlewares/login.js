const { body } = require("express-validator");
const bcrypt = require("bcrypt");
const db = require('../database/models/index')
const { User } = db

module.exports = [
  body("email")
    .notEmpty().withMessage('Introduzca un email')
    .isEmail().withMessage('Introduzca un email valido')
    .custom(async (value) => {
      let registered = await User.findOne({where: {email: value}});
      if (!registered) {
        return Promise.reject("Esta cuenta de email no esta registrada");
      }
      return true;
    }),

  body("password")
    .notEmpty().withMessage('Introduzca una contraseña')
    .isLength({ min: 8 }).withMessage('Introduzca una contraseña valida')
    .custom(async (value, {req}) => {
      let registered = await User.findOne({where: {email: req.body.email}});
      if (bcrypt.compareSync(value, registered.password) != true) {
        return Promise.reject("La contraseña es incorrecta");
      }
      return true;
    }),
];
