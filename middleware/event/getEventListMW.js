/**
 * Fetches all the event names and id-s from the database
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        let eventList = [
            {_id:0, name:'A cold one with the bois', attendance:5},
            {_id:1, name:'Board games', attendance:3}
        ];
        res.locals.eventList = eventList;
        next();
    };
};
