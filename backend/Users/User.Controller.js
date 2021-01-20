const mongoose = require('../db/schema')
const Users = mongoose.model('users')
const passport = require('passport')

var UsersController = function () {
	this.Insert = data => {
		return new Promise((resolve, reject) => {
			let user = new Users({
				// firstName: data.firstName,
				// lastName: data.lastName,
				email: data.email,
				// mobileNumber: data.mobileNumber,
				// address: data.address,
				password: data.password,
				// type: data.type,
			})
			user
				.save()
				.then(() => {
					resolve({ status: 200, message: 'success' })
				})
				.catch(err => {
					reject({
						status: 500,
						message: 'user creation failed due to Error: ' + err,
					})
				})
		})
	}

	this.retrieve = () => {
		return new Promise((resolve, reject) => {
			Users.find()
				.then(data => {
					resolve({ status: 200, message: data })
				})
				.catch(err => {
					reject({ status: 500, message: 'No data to be found. Error: ' + err })
				})
		})
	}

	this.retrieveByID = id => {
		return new Promise((resolve, reject) => {
			Users.findById(id)
				.then(data => {
					resolve({ status: 200, message: data })
				})
				.catch(err => {
					reject({ status: 500, message: 'No data to be found. Error: ' + err })
				})
		})
	}

    this.retrieveByEmailPw=(data)=>{
        return new Promise((resolve,reject)=>{
            Users.find({email:data.email,password:data.pw}).then((data)=>{
                resolve({status:200,message:data});
            }).catch((err)=>{
                reject({status:500,message:'No data to be found. Error: '+err});
            })
        });
    };

	// this.login = data => {
	// 	return new Promise((resolve, reject) => {
	// 		passport.authenticate('local', (err, user, info) => {
	// 			if (err) throw err
	// 			if (!user) res.send('No user exists')
	// 			else {
	// 				req.logIn(user, err => {
	// 					res.send('successfully authenticated')
	// 					console.log(user)
	// 				})
	// 			}
	// 		})
	// 		Users.find({ email: data.email, password: data.pw })
	// 			.then(data => {
	// 				resolve({ status: 200, message: data })
	// 			})
	// 			.catch(err => {
	// 				reject({ status: 500, message: 'No data to be found. Error: ' + err })
	// 			})
	// 	})
	// }

	// this.retrieveByEmailPw = data => {
	// 	return new Promise((resolve, reject) => {
	// 		Users.find({ email: data.email, password: data.pw })
	// 			.then(data => {
	// 				resolve({ status: 200, message: data })
	// 			})
	// 			.catch(err => {
	// 				reject({ status: 500, message: 'No data to be found. Error: ' + err })
	// 			})
	// 	})
	// }

	this.update = (id, data) => {
		return new Promise((resolve, reject) => {
			let user = {
				firstName: data.firstName,
				lastName: data.lastName,
				email: data.email,
				mobileNumber: data.mobileNumber,
				address: data.address,
				password: data.password,
				type: data.type,
			}
			Users.findByIdAndUpdate({ _id: id }, user)
				.then(() => {
					resolve({ status: 200, message: 'success' })
				})
				.catch(err => {
					console.log(err)
					reject({
						status: 500,
						message: 'User updating failed due to Error: ' + err,
					})
				})
		})
	}

	// cart
	this.addToCart = (req, res) => {
		console.log(req.user)
		const { productId } = req.body
		if (req.user) {
			Users.findByIdAndUpdate(req.user._id, {
				$push: { cart: { _id: productId, qty: 1 } },
			})
				.then(data => {
					res.status(200).json(data.cart)
				})
				.catch(err => res.status(400).json(err))
		} else {
			res.status(400)
		}
	}

	this.getCart = (req, res) => {
		console.log(req.user)
		Users.findOne({ email: req.user.email })
			.populate('cart._id')
			.exec(function (err, data) {
				console.log(data)
				if (err) return res.status(400).json({ msg: 'empty cart' })
				res.status(200).json(data.cart)
			})
	}
}

module.exports = new UsersController()
