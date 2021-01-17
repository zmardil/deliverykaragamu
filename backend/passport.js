const User = require('./DBSchema/SchemaMapper').model('users')
const bcrypt = require('bcrypt')
const passport = require('passport')
const localStrategy = require('passport-local').Strategy

const strategy = new localStrategy(
	{ usernameField: 'email' },
	(email, password, done) => {
		console.log(email, password)
		User.findOne({ email: email }, (err, user) => {
			if (err) return done(err)
			if (!user) return done(null, false)
			if (!user.verifyPassword(password)) return done(null, false)
			return done(null, user)
		})
	}
)

// passport.serializeUser((user, cb) => {
// 	cb(null, user.id)
// })

// passport.deserializeUser((id, cb) => {
// 	user.findOne({ _id: id }, (err, user) => {
// 		cb(err, user)
// 	})
// })

passport.serializeUser((user, done) => {
	done(null, { _id: _id })
})

passport.deserializeUser((id, done) => {
	User.findOne({ _id: id }, 'email', (err, user) => {
		done(null, user)
	})
})

module.exports = passport.use(strategy)
