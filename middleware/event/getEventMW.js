/**
 * Fetches information about the event on the current page.
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const EventModel = requireOption(objectrepository, 'EventModel');
    const PersonModel = requireOption(objectrepository, 'PersonModel');
    return function (req, res, next) {
        return EventModel.findOne({_id: req.params.eventid}, (err, event) => {
            if(err) { return next(err); }
            event.attendance = event.attendees.length;

            res.locals.people = event.attendees;
            res.locals.event = event;
            return next();
        });
    };
};
