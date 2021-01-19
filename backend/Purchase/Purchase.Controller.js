const mongoose = require('../db/schema')
const Purchase = mongoose.model('purchases')

var PurchaseController = function () {
	this.Insert = data => {
		return new Promise((resolve, reject) => {
			let purchase = new Purchase({
				UserId: data.UserId,
				TotalAmount: data.TotalAmount,
				Items: data.Items,
				address: data.address,
				paypalId: data.paypalId,
				date: data.date,
			})
			purchase
				.save()
				.then(() => {
					resolve({ status: 200, message: 'success' })
				})
				.catch(err => {
					reject({
						status: 500,
						message: 'purchase creation failed due to Error: ' + err,
					})
				})
		})
	}

	this.retrieve = () => {
		return new Promise((resolve, reject) => {
			Purchase.find()
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
			Purchase.findById(id)
				.then(data => {
					resolve({ status: 200, message: data })
				})
				.catch(err => {
					reject({ status: 500, message: 'No data to be found. Error: ' + err })
				})
		})
	}
}

module.exports = new PurchaseController()
