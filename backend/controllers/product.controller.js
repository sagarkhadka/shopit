const Product = require('../model/product.model')

// create nwe product
const newProduct = async (req, res, next) => {
  console.log(req.body[0])
  const product = await Product.create(req.body)
  console.log(product[0])

  res.status(201).json({
    success: true,
    product
  })
}

// get all product
const getProducts = async (req, res, next) => {
  const products = await Product.find()

  res.status(200).json({
    success: true,
    count: products.length,
    products
  })
}

// get single product
const getSingleProduct = async (req, res, next) => {
  const id = req.params.id

  const product = await Product.findById(id)
  if (!product) {
    return res.status(404).json({
      success: false,
      message: 'Product not found.'
    })
  }

  res.status(200).json({
    success: true,
    product
  })
}

// update product
const updateProduct = async (req, res, next) => {
  const id = req.params.id

  let product = await Product.findById(id)
  if (!product) {
    return res
      .status(404)
      .json({ success: false, message: 'Product not found' })
  }

  product = await Product.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false
  })

  res.status(200).json({
    success: true,
    message: 'Product updated sucessfully',
    product
  })
}

module.exports = { newProduct, getProducts, getSingleProduct, updateProduct }
