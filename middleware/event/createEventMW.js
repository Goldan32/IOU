/**
 * Creates an event entity. The new event has no people or loans,
 * these can be added by modifying it.
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const EventModel = requireOption(objectrepository, 'EventModel');


    return function (req, res, next) {
        if(typeof req.body.eventName === 'undefined'){
            return next();
        }
        // Create new event
        res.locals.event = new EventModel();
        res.locals.event.name = req.body.eventName;
        res.locals.event.attendees = [];
        res.locals.event.save(err => {
            if (err) { return next(err);}
            return res.redirect('/event/list');
        });
    };
};
