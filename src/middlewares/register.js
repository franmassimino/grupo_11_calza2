const { body } = require('express-validator');

module.exports = [
    body("user")
    .notEmpty().withMessage('Introduzca un nombre de usuario')
    .isLength({ min: 2 }).withMessage('Introduzca un nombre de usuario valido'),

    body("email")
    .notEmpty().withMessage('Introduzca un correo electronico')
    .custom((value) => {
        if (value.length && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(registerEmail.value)){
            return true
        } else {
            return Promise.reject("Introduzca un correo electronico valido");
        }
      }),

    body("password")
    .notEmpty().withMessage('Introduzca una contraseña')
    .isLength({ min: 2 }).withMessage('La contraseña debe contener 8 caracteres o mas'),
]