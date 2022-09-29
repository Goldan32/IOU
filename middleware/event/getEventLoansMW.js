/**
 * Fetches all the loans associated with the event on the
 * current page.
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        let loanList = [
            {_id:0, loaner:'Daniel', amount:5000, desc: "Food and drinks"},
            {_id:1, loaner:'Samuel', amount:3000, desc: 'Fuel cost'}
        ];
        res.locals.loanList = loanList;
        next();
    };
};
