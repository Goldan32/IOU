/**
 * Fetches the list of all people.
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const PersonModel = requireOption(objectrepository, 'PersonModel');
    return function (req, res, next) {
        return PersonModel.find({}, (err, people) => {
            if(err) { return next(err); }
            // TODO: figure out balance from loans
            people.forEach(p => {p.overallBalance = 0});
            res.locals.people = people;
            return next();
        });
    };
};

