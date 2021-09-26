const { body } = require("express-validator");
module.exports = [
  body("modelo")
    .notEmpty().withMessage('Introduzca el modelo del producto')
    .isLength({ min: 5 }).withMessage('El nombre del modelo debe tener por lo menos 5 caracteres'),

  body("descripcion")
    .notEmpty().withMessage('Introduzca una descripcion')
    .isLength({ min: 20 }).withMessage('La descripcion del producto debe tener por lo menos 20 caracteres'),
];
