// src/features/products/product.service.js
const repository = require('./product.repository');
const Product = require('./product.model');

exports.createProduct = async (data) => {
    // هنا بنعمل Mapping للداتا لـ Model
    const newProduct = new Product(data);
    return await repository.save(newProduct);
};