/**
 * Rename an existing event
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const EventModel = requireOption(objectrepository, 'EventModel');
    return function (req, res, next) {
        if (typeof req.body.eventName === 'undefined') {
            return next();
        }
        res.locals.event.name = req.body.eventName;
        res.locals.event.save(err => {
            if (err) { return next(err) };
            return res.redirect(`/event/view/${res.locals.event._id}`);
        });
    };
};
