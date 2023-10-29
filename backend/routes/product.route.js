const express = require('express')
const router = express.Router()

const {
  getProducts,
  newProduct,
  getSingleProduct,
  updateProduct
} = require('../controllers/product.controller')

router.route('/products').get(getProducts)
router.route('/product/:id').get(getSingleProduct)

router.route('/product/new').post(newProduct)

router.route('/product/update/:id').put(updateProduct)

module.exports = router
