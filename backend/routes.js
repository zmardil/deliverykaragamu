const express = require('express')
const ProductRoutes = require('./Product/Product.Routes')
const PurchaseRoutes = require('./Purchase/Purchase.Routes')
const UserRoutes = require('./Users/User.Routes')
const Routes = express.Router()

Routes.use('/products/', ProductRoutes)
Routes.use('/purchase/', PurchaseRoutes)
Routes.use('/users/', UserRoutes)

module.exports = Routes
