const { Product } = require('../models');

const productData = [
  {
    product_name: 'Polo T-Shirt',
    price: 39.99,
    stock: 3,
    category_id: 1,
  },
  {
    product_name: 'Tennis Sneakers',
    price: 145.99,
    stock: 10,
    category_id: 5,
  },
  {
    product_name: 'Football Hat',
    price: 24.99,
    stock: 11,
    category_id: 4,
  },
  {
    product_name: 'Top 25 Movie ',
    price: 19.99,
    stock: 7,
    category_id: 3,
  },
  {
    product_name: 'Sport Shorts',
    price: 29.99,
    stock: 9,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
