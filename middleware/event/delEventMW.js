/**
 * Removes an event from the database. All loans for this event
 * are also deleted.
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};
