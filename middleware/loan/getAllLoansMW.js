/**
 * Fetches all the loans
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const LoanModel = requireOption(objectrepository, 'LoanModel');
    return function (req, res, next) {
        return LoanModel.find({}, (err, loanList) => {
            if (err) { return next(err); }
            loanList.forEach(loan => loan.loanerName
                = res.locals.people
                .find(p => p._id.toString() === loan._loaner.toString()).name);
            res.locals.loanList = loanList;
            return next();
        });
    };
};
 