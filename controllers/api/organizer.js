'use strict'

const Model = require('../../models/organizers')
const Organizer = {}

Organizer.getEvents((res, req, next) => {
  Model.find({}).then((data) => {
    res.send({
      message: 'Listing Success!!',
      organizer: data
    })
  }).catch((err) => {
    res.send({error: err})
  })
})

Organizer.createEvent((res, req, next) => {
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
