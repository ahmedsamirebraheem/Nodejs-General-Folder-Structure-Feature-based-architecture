// src/features/products/product.model.js
// ده بيمثل الـ Domain Entity بتاعنا
class Product {
    constructor({ id, name, price, description, createdAt }) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.createdAt = createdAt || new Date();
    }
}

module.exports = Product;