/**
 * Fetches all the loans associated with the event on the
 * current page.
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const LoanModel = requireOption(objectrepository, 'LoanModel');
    return function (req, res, next) {
        return LoanModel.find({_event: req.params.eventid}, (err, loanList) => {
            if (err) { return next(err); }
            res.locals.loanList = loanList;
            return next();
        });
    };
};
