const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Event = db.model('Event', {
    name: String,
    attendees: [{ type: Schema.Types.ObjectId, ref: 'Person'}]
});

module.exports = Event;
