const { Router } = require('express')
const controllers = require('./controllers')

const router = Router()

router.get('/products', controllers.getProducts)
router.get('/products/:id', controllers.getProductById)
router.post('/products', controllers.createProduct)
router.delete('/products/:id', controllers.deleteProduct)
router.patch('/products/:id', controllers.updateProduct)

module.exports = router
