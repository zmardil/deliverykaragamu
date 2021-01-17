const mongoose = require('mongoose')
require('dotenv').config()
const mongooseFuzzySearching = require('mongoose-fuzzy-searching')
const bcrypt = require('bcrypt')

const ProductSchema = new mongoose.Schema({
	Img1Path: {
		type: String,
		required: true,
	},
	Img2Path: {
		type: String,
		required: false,
	},
	Img3Path: {
		type: String,
		required: false,
	},
	Img4Path: {
		type: String,
		required: false,
	},
	Img5Path: {
		type: String,
		required: false,
	},
	Category1: {
		type: String,
		required: false,
	},
	Category2: {
		type: String,
		required: false,
	},
	stock: {
		type: Number,
		required: false,
	},
	Name: {
		type: String,
		required: true,
		text: true,
	},
	Description: {
		type: String,
		required: true,
	},
	Price: {
		type: Number,
		required: true,
	},
	Warrenty: {
		type: Number,
		required: false,
	},
	Code: {
		type: String,
		required: true,
	},
	Note: {
		type: String,
		required: false,
	},
	Brand: {
		type: String,
		required: false,
	},
	Rating: {
		type: String,
		required: false,
	},
	Tags: {
		type: String,
		required: false,
	},
})

const PurchaseSchema = new mongoose.Schema({
	UserId: {
		type: String,
		required: true,
	},
	TotalAmount: {
		type: String,
		required: true,
	},
	Items: {
		type: String,
		required: true,
	},
	address: {
		type: String,
		required: true,
	},
	paypalId: {
		type: String,
		required: true,
	},
	date: {
		type: String,
		required: true,
	},
})

const UserSchema = new mongoose.Schema({
	firstName: {
		type: String,
		// required: true,
	},
	lastName: {
		type: String,
		// required: true,
	},
	email: {
		type: String,
		unique: true,
		required: true,
	},
	mobileNumber: {
		type: String,
		// required: true,
	},
	address: {
		type: String,
		// required: true,
	},
	password: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		// required: true,
	},
	cart: [
		{
			productId: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'products',
				required: true,
				unique: true
			},
			qty: {
				type: Number,
				required: true,
			},
		},
	],
})

UserSchema.methods = {
	verifyPassword: function (password) {
		return bcrypt.compareSync(password, this.password)
	},
}

UserSchema.pre('save', function (next) {
	if (!this.password) {
		console.log('no password provided')
		next()
	} else {
		this.password = bcrypt.hashSync(this.password, 10)
		next()
	}
})

// ProductSchema.index({ username: 'text' })
ProductSchema.plugin(mongooseFuzzySearching, {
	fields: ['Name', 'Category1', 'Description', 'Category2'],
})

mongoose.model('products', ProductSchema)
mongoose.model('purchases', PurchaseSchema)
mongoose.model('users', UserSchema)

const MONGO_URI =
	process.env.MONGO_URI ||
	'mongodb+srv://developer:dev@cluster0.ypsev.mongodb.net/products?retryWrites=true&w=majority'

mongoose
	.connect(MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: true,
	})
	.then(() => {
		console.log('Connected to DB')
	})
	.catch(err => {
		console.error(err)
	})

// mongoose.connect('mongodb+srv://user:user@cluster0.ypsev.mongodb.net/products?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology: true}).then(()=>{
//     console.log('Connected to DB');
// }).catch((err)=>{
//    console.error(err);
// });

module.exports = mongoose
