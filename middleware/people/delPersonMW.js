/**
 * Delete a person permanently, All loans associated with this
 * person will change accordingly. If he was the loaner, the
 * loan is deleted.
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};
