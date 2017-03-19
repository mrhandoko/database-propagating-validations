'use strict'

const Model = require('../models/organizers')
const Organizer = {}

Organizer.getEvents = ((req, res, next) => {
  Model.find({}).then((data) => {
    res.send({
      message: 'Listing Success!!',
      organizer: data
    })
  }).catch((err) => {
    res.send({error: err})
  })
})

Organizer.createEvent = ((req, res, next) => {
  Model.create({
    title: req.body.event,
    username: req.body.username,
    date: req.body.date
  }).then((data) => {
    res.send({
      message: 'Success! Create new event',
      organizer: data
    })
  }).catch((err) => {
    res.send({error: err})
  })
})

Organizer.updateEvent = ((req, res, next) => {
  Model.update({ _id: req.params.id }, {$set: {
      title: req.body.event,
      username: req.body.username,
      date: req.body.date
    }
  }).then((data) => {
    res.send({
      message: 'Success! Update event',
      organizer: data
    })
  }).catch((err) => {
    res.send({error: err})
  })
})

Organizer.removeEvent = ((req, res, next) => {
  Model.remove({ _id: req.params.id })
    .then((data) => {
      res.send({
        message: 'Success! remove event',
        organizer: data
      })
    }).catch((err) => {
    res.send({error: err})
  })
})

module.exports = Organizer
