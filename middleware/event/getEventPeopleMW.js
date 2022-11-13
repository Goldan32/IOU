/**
 * Fetches the names and id-s of all the people associated with
 * the event on the current page.
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    //const EventModel = requireOption(objectrepository, 'EventModel');
    const PersonModel = requireOption(objectrepository, 'PersonModel');
    return function (req, res, next) {
        return PersonModel.find({_event: {$ne: req.params.eventid}}, (err, outsiders) => {
            if(err) { return next(err); }
            res.locals.outsiders = outsiders;
            return next();
        });
    };
};
