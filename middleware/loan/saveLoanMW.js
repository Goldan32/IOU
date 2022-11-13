/**
 * Create or modify a loan. Loans can be created and viewed when
 * displaying a single event on a page.
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const LoanModel = requireOption(objectrepository, 'LoanModel');
    return function (req, res, next) {
        if (typeof res.locals.people === 'undefined') {
            return next(err);
        }
        if ((typeof req.body.loanName === 'undefined') || (typeof req.body.loanCost === 'undefined')) {
            return next();
        }
        if (typeof res.locals.loan === 'undefined') {
            res.locals.loan = new LoanModel();
            res.locals.loan.loaner = people.find(p => p.name === loanPerson);
        }

        let event = {_id:0, name:'A cold one with the bois'}
        res.locals.event = event;
        next();
    };
};
