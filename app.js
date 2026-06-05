const express = require('express');
const config = require('./src/config'); // استدعاء الكونفيج
const productRoutes = require('./src/features/products/product.routes');
const errorHandler = require('./src/middlewares/errorHandler');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Node.js Feature-Based API is running perfectly!' });
});

app.use('/api/products', productRoutes);
app.use(errorHandler);

// استخدام الـ config.port بدل process.env
app.listen(config.port, () => {
    console.log(`Server is running in ${config.nodeEnv} mode on port ${config.port}`);
});