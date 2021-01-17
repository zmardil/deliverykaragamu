const express = require('express')
const cors = require('cors')
const path = require('path')
const session = require('express-session')
const cookieParser = require('cookie-parser')

const ApplicationRoutes = require('./routes')
const passport = require('./passport')

const app = express()

const PORT = process.env.PORT || 5000

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(
	cors({
		origin: 'http://localhost:3000',
		credentials: true,
	})
)
app.use(
	session({
		secret: 'secret',
		resave: true,
		saveUninitialized: true,
	})
)
app.use(cookieParser('secret'))
app.use(passport.initialize())
app.use(passport.session())

app.use('/', ApplicationRoutes)
app.use('/uploads', express.static('Product/uploads'))

app.listen(PORT, err => {
	if (err) {
		console.error(err)
	} else console.log(`Server running at port: ${PORT}`)
})
