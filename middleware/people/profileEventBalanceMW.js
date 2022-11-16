/**
 * Fetches data for one person.
 */
const requireOption = require('../requireOption');
module.exports = function (objectrepository) {
    const LoanModel = requireOption(objectrepository, 'LoanModel');
    return async function (req, res, next) {
        for (let pe of res.locals.personEventList) {
            await LoanModel.find({_event: pe}, (err, pLoanList) => {
                if (err) { return next(err); }
                pe.eventBalance = pLoanList
                    .map(l => (l._loaner.toString() === res.locals.person._id.toString())
                    ? l.amount - (l.amount/(pe.attendees.length))
                    : -(l.amount/(pe.attendees.length)))
                    .reduce((sum, current) => sum + current, 0);
            });
        }
        return next();
    };
};
 