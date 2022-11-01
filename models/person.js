const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Person = db.model('Person', {
    name: String
});

module.exports = Person;
