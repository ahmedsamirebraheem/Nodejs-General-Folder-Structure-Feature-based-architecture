// src/features/products/product.dto.js
const Joi = require('joi');

const createProductSchema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    price: Joi.number().positive().required(),
    description: Joi.string().max(500).optional()
});

module.exports = { createProductSchema };