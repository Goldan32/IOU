/**
 * Create or modify a person.
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const PersonModel = requireOption(objectrepository, 'PersonModel')

    return function (req, res, next) {
        res.locals.alreadyExists = false;
        if (typeof req.body.personName === 'undefined') {
            return next();
        }
        if (typeof (res.locals.people.find(p =>  p.name == req.body.personName)) !== 'undefined') {
            res.locals.alreadyExists = true;
            return next();
        }
        if (typeof res.locals.person === 'undefined') {
            res.locals.person = new PersonModel();
            res.locals.person.name = req.body.personName;
            res.locals.person.save( err => {
                if (err) { return next(err); }
                return res.redirect('/people/list');
            });
        } else {
            res.locals.person.name = req.body.personName;
            res.locals.person.save( err => {
                if (err) { return next(err); }
                return res.redirect(`/people/profile/${res.locals.person._id}`);
            });
        }
    };
};
