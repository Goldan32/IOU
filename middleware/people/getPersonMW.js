/**
 * Fetches data for one person.
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
   return function (req, res, next) {
        let person = {_id:0, name:'Daniel', overallBalance:7000, eventBalance:5000};
        res.local.person = person;
        next();
    };
};