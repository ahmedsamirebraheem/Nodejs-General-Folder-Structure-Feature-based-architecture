// src/features/products/product.controller.js
const service = require('./product.service');
const { createProductSchema } = require('./product.dto');

exports.createProduct = async (req, res, next) => {
    try {
        // Validation (زي الـ FluentValidation بالظبط)
        const { error, value } = createProductSchema.validate(req.body);
        
        if (error) {
            return res.status(400).json({ 
                status: "error",
                message: "Validation Failed",
                details: error.details.map(d => d.message)
            });
        }

        // لو الداتا سليمة، كمل للـ Service
        const product = await service.createProduct(value);
        res.status(201).json({ status: "success", data: product });
        
    } catch (error) {
        next(error); // أي خطأ غير متوقع هيروح للـ Global Error Handler
    }
};