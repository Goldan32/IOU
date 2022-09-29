/**
 * Rename an existing event
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        let event = {_id:0, name: 'A cold one with the bois'};
        res.locals.event = event;
        next();
    };
};
