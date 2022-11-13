/**
 * Removes an event from the database. All loans for this event
 * are also deleted.
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        if (typeof res.locals.event === 'undefined') { return next(); }
        res.locals.event.remove( err => {
            if (err) { return next(err); }
            return res.redirect('/event/list');
        });
    };
};
