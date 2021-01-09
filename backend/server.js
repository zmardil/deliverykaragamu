const express = require('express')
const cors = require('cors')
const path = require('path')

const ApplicationRoutes = require('./routes')

const app = express()

const PORT = process.env.PORT || 8080

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

app.use('/', ApplicationRoutes)
app.use('/uploads', express.static('Product/uploads'))

app.listen(PORT, err => {
	if (err) {
		console.error(err)
	} else console.log(`Server running at port: ${PORT}`)
})
