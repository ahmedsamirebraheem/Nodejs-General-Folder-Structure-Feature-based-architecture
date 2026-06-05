// src/features/products/product.routes.js
const express = require('express');
const router = express.Router();
const controller = require('./product.controller');
// تقدر تحط هنا Middlewares خاصة بالـ Feature دي بس
const authMiddleware = require('../../middlewares/auth'); 

router.get('/', controller.getAllProducts);
router.post('/', authMiddleware, controller.createProduct); // حماية الـ POST فقط

module.exports = router;