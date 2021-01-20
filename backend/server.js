// config
require('dotenv').config()

const express = require('express')
const cors = require('cors')
const path = require('path')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const MongoStore = require('connect-mongo')(session)

const ApplicationRoutes = require('./routes')
const passport = require('./passport')
const mongoose = require('mongoose')

const app = express()

const PORT = process.env.PORT || 5000

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

app.use(
	cors({
		origin: ['http://localhost:3000', 'http://localhost:3001'],
		credentials: true,
	})
)
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieParser('secret'))
app.use(
	session({
		secret: 'secret',
		resave: false,
		saveUninitialized: false,
		store: new MongoStore({ dbName: 'session', url: MONGO_URI }),
		cookie: { secure: false },
	})
)
app.use(passport.initialize())
app.use(passport.session())

app.use('/', ApplicationRoutes)
app.use('/uploads', express.static('Product/uploads'))

app.listen(PORT, err => {
	if (err) {
		console.error(err)
	} else console.log(`Server running at port: ${PORT}`)
})
