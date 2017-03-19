var express = require('express')
var router = express.Router()
const Organizer = require('../../controllers/organizer')

router.get('/events', Organizer.getEvents)
router.post('/event', Organizer.createEvent)
router.put('/event/:id', Organizer.updateEvent)
router.delete('/event/:id', Organizer.removeEvent)

module.exports = router
