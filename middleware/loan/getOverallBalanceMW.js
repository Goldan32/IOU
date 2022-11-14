/**
 * Calculate overall balance for every person
 */
 const getPeopleMW = require('../people/getPeopleMW');
const requireOption = require('../requireOption');

 module.exports = function (objectrepository) {
    const PersonModel = requireOption(objectrepository, 'PersonModel');
    return function (req, res, next) {
        let balances = {};
        res.locals.people.forEach(p => balances[p._id.toString()] = 0);
        res.locals.loanList.forEach(loan => {
            loanEvent = res.locals.eventList.find(e => e._id.toString() === loan._event.toString());
            loanEvent.attendees.forEach(a => balances[a.toString()] += (a.toString() === loan._loaner.toString()) ? loan.amount -(loan.amount / (loanEvent.attendees.length)) : -(loan.amount / (loanEvent.attendees.length)));
        });
        res.locals.people.forEach(p => p.overallBalance = balances[p._id.toString()]);
        return next();
    };
};