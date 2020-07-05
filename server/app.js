const path = require('path')
const express = require('express')
const router = require('./controllers')

const app = express()
app.use(express.static(path.join(__dirname, '..', 'client', 'build')))
app.use(express.json())

app.use(router)
app.disable('x-powered-by')
app.use(express.urlencoded({ extended: false }))

module.exports = app
