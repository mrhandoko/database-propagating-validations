'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const validate = require('mongoose-validator')

let email_validation = [
  validate({
    validator: 'isEmail',
    message: 'Email is nof valid!'
  })
]

let date_validation = [
  validate({
    validator: 'isDate',
    message: 'Format date is not valid! example :yyyy/mm/dd'
  })
]

let organizerSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Event title is required. Please fill this form'],
    unique: [true, 'Event Title is already in used']
  },
  username: {
    type: String,
    required: [true, 'Username is required. Please fill this form']
  },
  date: {
    type: Date,
    required: [true, 'Date is required. Please fill this form'],
    validate: date_validation
  }
})

let Organizer = mongoose.model('organizer', organizerSchema)

module.exports = Organizer
