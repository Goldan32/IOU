/**
 * Calculate eventBalance for insiders.
 */
 const requireOption = require('../requireOption');

 module.exports = function (objectrepository) {
    return function (req, res, next) {
        res.locals.insiders.forEach(p => p.eventBalance 
            = res.locals.loanList
            .map(loan => (loan._loaner.toString() === p._id.toString()) 
            ? loan.amount - (loan.amount/(res.locals.event.attendance))
            : -(loan.amount/(res.locals.event.attendance)))
            .reduce((sum, e) => sum + e, 0));
        return next();
    };
};