const express = require('express');
const productRoutes = require('./src/features/products/product.routes');

require('dotenv').config();

const app = express();

// Built-in Middlewares عشان يفهم الـ JSON requests
app.use(express.json());

// Base Route للتأكيد إن السيرفر قايم
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Node.js Feature-Based API is running perfectly!' });
});

app.use('/api/products', productRoutes);

const errorHandler = require('./src/middlewares/errorHandler');
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});