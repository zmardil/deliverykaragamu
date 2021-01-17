var express = require('express')
const passport = require('../passport')
var router = express.Router()
var UsersController = require('./User.Controller')

router.post('/', (req, res) => {
	UsersController.Insert(req.body)
		.then(data => {
			res.status(data.status).send(data.message)
		})
		.catch(err => {
			res.status(err.status).send(err.message)
		})
})

router.post('/login', (req, res, next) => {
	console.log(req.body)
	passport.authenticate('local', (err, user) => {
		if (err) return next(err)
		if (!user) return res.status(401)
		req.logIn(user, () => {
			res.json({ _id: user._id, email: user.email })
		})
	})(req, res, next)
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
