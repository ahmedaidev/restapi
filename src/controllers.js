const prisma = require('./db')

const getProducts = async (req, res, next) => {
  try {
    const products = await prisma.product.findMany({})
    res.status(200).json(products)
  } catch (error) {
    next(error)
  }
}

const getProductById = async (req, res, next) => {
  try {
    const { id } = req.params
    const product = await prisma.product.findUnique({
      where: {
        id: +id,
      },
    })
    res.status(200).json(product)
  } catch (error) {
    next(error)
  }
}

const createProduct = async (req, res, next) => {
  try {
    const product = await prisma.product.create({
      data: req.body,
    })
    res.status(201).json(product)
  } catch (error) {
    next(error)
  }
}

const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params
    const product = await prisma.product.delete({
      where: {
        id: +id,
      },
    })
    res.status(200).json({ message: 'success' })
  } catch (error) {
    next(error)
  }
}

const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params
    const product = await prisma.product.update({
      where: {
        id: +id,
      },
      data: req.body,
    })
    res.status(200).json(product)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
}
