/**
 * Delete a person permanently, All loans associated with this
 * person will change accordingly. If he was the loaner, the
 * loan is deleted.
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        if (typeof res.locals.person === 'undefined') { return next(); }
        res.locals.person.remove( err => {
            if (err) { return next(err); }
            return res.redirect('/people/list');
        });
    };
};
