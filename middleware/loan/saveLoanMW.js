/**
 * Create or modify a loan. Loans can be created and viewed when
 * displaying a single event on a page.
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        let people = [
            {_id:0, name:'Daniel', overallBalance:7000, eventBalance:5000},
            {_id:1, name:'Samuel', overallBalance:2000, eventBalance:1000}
        ];
        res.locals.people = people;
        let event = {_id:0, name:'A cold one with the bois'}
        res.locals.event = event;
        next();
    };
};
