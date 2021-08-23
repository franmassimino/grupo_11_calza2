const { body } = require('express-validator');

module.exports = [
    body("user")
    .notEmpty()
    .withMessage('Introduzca un nombre de usuario'),

    body("email")
    .notEmpty()
    .withMessage('Introduzca un correo electronico'),

    body("password")
    .notEmpty()
    .withMessage('La contraseña debe contener 6 caracteres o mas')
]