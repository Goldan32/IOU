/**
 * Fetches data for one person.
 */
const requireOption = require('../requireOption');
module.exports = function (objectrepository) {
    const PersonModel = requireOption(objectrepository, 'PersonModel');
    return function (req, res, next) {
        return PersonModel.findOne({_id: req.params.personid}, (err, person) => {
            if (err) { return next(err); }
            res.locals.person = person;
            res.locals.personEventList = res.locals.eventList.filter(e => 
                e.attendees.map(n => n.toString()).includes(person._id.toString())
            );
            return next();
        });
    };
};
