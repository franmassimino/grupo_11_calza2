const { body } = require("express-validator");
const bcrypt = require("bcrypt");
const userModel = require("../models/user");
module.exports = [
  body("email")
    .notEmpty().withMessage('Introduzca un email')
    .isEmail().withMessage('Introduzca un email valido')
    .custom((value) => {
      let registered = userModel.findByEmail(value);
      if (!registered) {
        return Promise.reject("Esta cuenta de email no esta registrada");
      }
      return true;
    }),

  body("password")
    .notEmpty().withMessage('Introduzca una contraseña')
    .isLength({ min: 8 }).withMessage('Introduzca una contraseña valida')
    .custom((value, { req }) => {
      let registered = userModel.findByEmail(req.body.email);
      if (bcrypt.compareSync(value, registered.password) != true) {
        return Promise.reject("La contraseña es incorrecta");
      }
      return true;
    }),
];
