/**
 * Fetches data for one person.
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const EventModel = requireOption(objectrepository, 'EventModel');
    const PersonModel = requireOption(objectrepository, 'PersonModel');
    return function (req, res, next) {
        return PersonModel.findOne({_id: req.params.personid}, (err, person) => {
            if (err) { return next(err); }
            //TODO: Calculate overall balance
            person.overallBalance = 0;
            res.locals.person = person;
            if (typeof res.locals.eventList !== 'undefined') {
                res.locals.eventList = res.locals.eventList.filter(e => {
                    e.attendees.includes(person);
                });
                //TODO: Calculate balance from loans
                res.locals.eventList.forEach(e => {e.eventBalance = 0;})
            }
            return next();
        });
    };
};