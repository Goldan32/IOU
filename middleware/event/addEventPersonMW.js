/**
 * Add an existing person to the currently displayed event.
 */
 const requireOption = require('../requireOption');

 module.exports = function (objectrepository) {
    //const EventModel = requireOption(objectrepository, 'EventModel');
    const PersonModel = requireOption(objectrepository, 'PersonModel');
    return function (req, res, next) {
        if (typeof req.body.personName === 'undefined') {
            return next();
        }
        return PersonModel.findOne({name: req.body.personName}, (err, person) => {
            if (err) { return next(err); }
            res.locals.event.attendees.push(person);
            res.locals.event.save( err => {
                if (err) { return next(err); }
                return res.redirect(`/event/view/${res.locals.event._id}`);
            });
        });
    };
 };
