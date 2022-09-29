/**
 * Fetches the names and id-s of all the people associated with
 * the event on the current page.
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        let people = [
            {_id:0, name:"Daniel", eventBalance:5000},
            {_id:1, name:"Samuel", eventBalance:-1000},
            {_id:2, name:"Christian", eventBalance:-4000},
        ];
        res.locals.people = people;
        next();
    };
};
