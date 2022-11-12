/**
 * Fetches all the event names and id-s from the database
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const EventModel = requireOption(objectrepository, 'EventModel');

    return function (req, res, next) {
        return EventModel.find({}, (err, eventList) => {
            if(err) { return next(err); }
            res.locals.eventList = eventList;
            return next();
        });
    };
};
