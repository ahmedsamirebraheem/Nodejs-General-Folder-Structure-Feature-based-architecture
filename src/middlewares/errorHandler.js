// src/middlewares/errorHandler.js
module.exports = (err, req, res, next) => {
    // تسجيل الخطأ في الـ Log عشان نراجعه وقت الـ Debugging
    console.error(`[Error Handler]: ${err.message}`);

    // إرجاع رد موحد ومنظم للـ Client
    const statusCode = err.status || 500;
    res.status(statusCode).json({
        status: "error",
        message: err.message || "Internal Server Error"
    });
};