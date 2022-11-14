/**
 * Fetches the names and id-s of all the people associated with
 * the event on the current page.
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        res.locals.outsiders = [];
        res.locals.insiders = []
        res.locals.people.forEach(p => {
            if (res.locals.event.attendees
                .map(x => x.toString())
                .includes(p._id.toString())) {
                res.locals.insiders.push(p);
            } else {
                res.locals.outsiders.push(p);
            }
        });
        return next();
    };
};
