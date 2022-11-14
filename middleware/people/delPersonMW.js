/**
 * Delete a person permanently, All loans associated with this
 * person will change accordingly. If he was the loaner, the
 * loan is deleted.
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const LoanModel = requireOption(objectrepository, 'LoanModel');
    const PersonModel = requireOption(objectrepository, 'PersonModel');
    return async function (req, res, next) {
        if (typeof res.locals.person === 'undefined') { return next(); }

        for (let e of res.locals.eventList) {
            e.attendees = e.attendees.filter(a => a.toString() !== res.locals.person._id.toString());
            await e.save( err => {
                if (err) { return next(err); }
            })
        }

        LoanModel.deleteMany({_loaner: res.locals.person}, err => {
            if (err) { return next(err); }
            res.locals.person.remove( err => {
                if (err) { return next(err); }
                return res.redirect('/people/list');
            });
        });
    };
};
