/**
 * Fetches information about the event on the current page.
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        let event = {_id:0, name:'A cold one with the bois', attendance:5};
        res.locals.event = event;
        next();
    };
};
