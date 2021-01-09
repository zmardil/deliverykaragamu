const mongoose = require('../DBSchema/SchemaMapper')
const Products = mongoose.model('products')

var ProductController = function () {
	this.Insert = data1 => {
		var data = data1.body
		var newImg1Path = data1.files[0].path.replace('Product/', '')
		var newImg2Path = data1.files[1].path.replace('Product/', '')
		var newImg3Path = data1.files[2].path.replace('Product/', '')
		var newImg4Path = data1.files[3].path.replace('Product/', '')
		var newImg5Path = data1.files[4].path.replace('Product/', '')
		return new Promise((resolve, reject) => {
			let products = new Products({
				Img1Path: newImg1Path,
				Img2Path: newImg2Path,
				Img3Path: newImg3Path,
				Img4Path: newImg4Path,
				Img5Path: newImg5Path,
				Price: data.Price,
				Description: data.Description,
				Name: data.Name,
				stock: data.stock,
				Code: data.Code,
				Category1: data.Category1,
				Category2: data.Category2,
			})
			products
				.save()
				.then(() => {
					resolve({ status: 200, message: 'success' })
				})
				.catch(err => {
					reject({
						status: 500,
						message: 'product creation failed due to Error: ' + err,
					})
				})
		})
	}

	this.retrieve = query => {
		if (query === 'all') {
			return new Promise((resolve, reject) => {
				Products.find()
					.then(data => {
						resolve({ status: 200, message: data })
					})
					.catch(err => {
						reject({
							status: 500,
							message: 'No data to be found. Error: ' + err,
						})
					})
			})
		} else {
			return new Promise((resolve, reject) => {
				Products.find({ Title: /query/ })
					.then(data => {
						resolve({ status: 200, message: data })
					})
					.catch(err => {
						reject({
							status: 500,
							message: 'No data to be found. Error: ' + err,
						})
					})
			})
		}
	}

	this.retrieveByID = id => {
		return new Promise((resolve, reject) => {
			Products.findById(id)
				.then(data => {
					resolve({ status: 200, message: data })
				})
				.catch(err => {
					reject({ status: 500, message: 'No data to be found. Error: ' + err })
				})
		})
	}

	this.reduceByID = id => {
		return new Promise((resolve, reject) => {
			Products.findById(id)
				.then(data => {
					let product = data
					product.stock = product.stock - 1
					Products.findByIdAndUpdate({ _id: id }, product)
						.then(() => {
							resolve({ status: 200, message: 'success' })
						})
						.catch(err => {
							console.log(err)
							reject({
								status: 500,
								message: 'Products updating failed due to Error: ' + err,
							})
						})
				})
				.catch(err => {
					reject({ status: 500, message: 'No data to be found. Error: ' + err })
				})
		})
	}

	this.retrieveByCode = id => {
		return new Promise((resolve, reject) => {
			Products.find({ Code: id })
				.then(data => {
					resolve({ status: 200, message: data })
				})
				.catch(err => {
					reject({ status: 500, message: 'No data to be found. Error: ' + err })
				})
		})
	}

	this.update = (id, data) => {
		return new Promise((resolve, reject) => {
			let products = {
				Price: data.Price,
				Description: data.Description,
				Name: data.Name,
				stock: data.stock,
				Code: data.Code,
				Category1: data.Category1,
				Category2: data.Category2,
			}
			Products.findByIdAndUpdate({ _id: id }, products)
				.then(() => {
					resolve({ status: 200, message: 'success' })
				})
				.catch(err => {
					console.log(err)
					reject({
						status: 500,
						message: 'Products updating failed due to Error: ' + err,
					})
				})
		})
	}

	this.updatewithImg = (id, data1) => {
		var data = data1.body
		if (data.Price !== '' && data.Title !== '' && data.Description !== '') {
			if (!isNaN(data.Price)) {
				return new Promise((resolve, reject) => {
					let products = {
						ImgPath: data1.file.path,
						Title: data.Title,
						Description: data.Description,
						Price: data.Price,
					}
					Products.findByIdAndUpdate({ _id: id }, products)
						.then(() => {
							resolve({ status: 200, message: 'success' })
						})
						.catch(err => {
							console.log(err)
							reject({
								status: 500,
								message: 'Products updating failed due to Error: ' + err,
							})
						})
				})
			} else {
				return new Promise((resolve, reject) => {
					resolve({ status: 200, message: 'Price Should be a number' })
				})
			}
		} else {
			return new Promise((resolve, reject) => {
				resolve({ status: 200, message: 'Fill all the fields' })
			})
		}
	}

	this.delete = id => {
		return new Promise((resolve, reject) => {
			Products.findByIdAndDelete(id)
				.then(() => {
					resolve({ status: 200, message: { success: true } })
				})
				.catch(err => {
					reject({ status: 500, message: 'No data to be found. Error: ' + err })
				})
		})
	}
}

module.exports = new ProductController()
