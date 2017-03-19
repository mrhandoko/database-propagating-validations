var express = require('express')
var logger = require('morgan')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/propagation')
mongoose.Promise = global.promise

var index = require('./routes/api/index')

var app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api', index)

module.exports = app
