/**
 * Create or modify a loan. Loans can be created and viewed when
 * displaying a single event on a page.
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const LoanModel = requireOption(objectrepository, 'LoanModel');
    const PersonModel = requireOption(objectrepository, 'PersonModel');
    return function (req, res, next) {
        res.locals.loanIsNumber = true;
        if ((typeof res.locals.people === 'undefined') || (typeof res.locals.event === 'undefined')){
            return next(err);
        }
        if ((typeof req.body.loanName === 'undefined') 
            || (typeof req.body.loanCost === 'undefined')
            || (typeof req.body.loanPersonName === 'undefined')) {
                return next();
        }
        parsedLoanCost = parseInt(req.body.loanCost)
        if (isNaN(parsedLoanCost)) {
            res.locals.loanIsNumber = false
            return next();
        }
        if (typeof res.locals.loan === 'undefined') {
            res.locals.loan = new LoanModel();
            res.locals.loan._event = res.locals.event;
            res.locals.loan.amount = req.body.loanCost;
            res.locals.loan.description = req.body.loanName;
            return PersonModel.findOne({name: req.body.loanPersonName}, (err, person) => {
                if (err) { return next(err); }
                res.locals.loan._loaner = person;
                res.locals.loan.save( err => {
                    if (err) { return next(err); }
                    return res.redirect(`/event/view/${res.locals.event._id}`);
                });
            });
        }

    };
};
