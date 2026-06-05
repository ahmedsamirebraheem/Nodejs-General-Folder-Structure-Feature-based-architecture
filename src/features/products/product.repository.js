class ProductRepository {
    async findAll() {
        // هنا بيتم الاستعلام الفعلي من الداتابيز
        return [{ id: 1, name: 'Product A' }];
    }
}
module.exports = new ProductRepository();