/**
 * Renders the page with the data fetched by other middlewares.
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};

