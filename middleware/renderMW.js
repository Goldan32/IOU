/**
 * Renders the page with the data fetched by other middlewares.
 */
const requireOption = require('./requireOption');

module.exports = function (objectrepository, viewName) {
    return function (req, res) {
        res.render(viewName, res.locals);
    };
};

