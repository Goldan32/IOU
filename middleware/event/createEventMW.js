/**
 * Creates an event entity. The new event has no people or loans,
 * these can be added by modifying it.
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};
