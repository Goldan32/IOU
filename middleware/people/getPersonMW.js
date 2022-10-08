/**
 * Fetches data for one person.
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
   return function (req, res, next) {
        let person = {_id:0, name:'Daniel', overallBalance:7000, eventBalance:5000};
        res.locals.person = person;
        let eventList = [
            {_id:0, name:'A cold one with the bois', eventBalance:5000},
            {_id:1, name:'Board games', eventBalance:3000},
        ];
        res.locals.eventList = eventList;
        next();
    };
};