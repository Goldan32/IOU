const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Loan = db.model('Loan', {
    amount: Number,
    description: String,
    _loaner: {type: Schema.Types.ObjectId, ref: 'Person'},
    _event: {type: Schema.Types.ObjectId, ref: 'Event'}
});

module.exports = Loan;
