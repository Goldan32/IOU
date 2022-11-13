const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Person = db.model('Person', {
    name: {type: String, unique: true}
});

module.exports = Person;
