exports.getAllProducts = (req, res) => {
    res.status(200).json({ success: true, data: "List of products" });
};