/**
 * Add an existing person to the currently displayed event.
 */
 const requireOption = require('../requireOption');

 module.exports = function (objectrepository) {
    return function (req, res, next) {
        let people = [
            {_id:0, name:"Daniel"},
            {_id:1, name:"Samuel"},
            {_id:2, name:"Christian"},
        ];
        res.locals.people = people;
        next();
    };
 };
