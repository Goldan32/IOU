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
            res.locals.person = person;
            if (typeof res.locals.eventList !== 'undefined') {
                res.locals.eventList = res.locals.eventList.filter(e => 
                    e.attendees.map(n => n.toString()).includes(person._id.toString())
                );
            }
            return next();
        });
    };
};