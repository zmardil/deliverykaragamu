const express = require('express')
const passport = require('../passport')
const router = express.Router()
const UsersController = require('./User.Controller')
const { isAdmin, isAuth } = require('../middleware/auth')

const log = console.log

router.post('/', (req, res) => {
	UsersController.Insert(req.body)
		.then(data => {
			res.status(data.status).send(data.message)
		})
		.catch(err => {
			res.status(err.status).send(err.message)
		})
})

router.post('/admin/login', (req, res) => {
	console.log(req.body)
	UsersController.retrieveByEmailPw(req.body)
		.then(data => {
			res.status(data.status).send(data.message)
		})
		.catch(err => {
			res.status(err.status).send(err.message)
		})
})

router.post('/login', (req, res, next) => {
	passport.authenticate('local', (err, user) => {
		if (err) return next(err)
		if (!user) return res.status(401)
		req.logIn(user, () => {
			res.json({ _id: user._id, email: user.email, type: user.type })
		})
	})(req, res, next)
})

router.get('/logout', (req, res) => {
	req.logout()
})

router.post('/cart', UsersController.addToCart)

router.get('/cart', UsersController.getCart)

router.get('/', (req, res) => {
	UsersController.retrieve()
		.then(data => {
			res.status(data.status).send(data.message)
		})
		.catch(err => {
			res.status(err.status).send(err.message)
		})
})

router.get('/:id', (req, res) => {
	let id = req.params.id
	UsersController.retrieveByID(id)
		.then(data => {
			res.status(data.status).send(data.message)
		})
		.catch(err => {
			res.status(err.status).send(err.message)
		})
})

module.exports = router
