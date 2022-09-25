/* TODO: make middlewares provide data to ejs engine */

const express = require('express');
const app = express();
//const ejs = require("ejs");

const port_num = 3000

app.set("view engine", "ejs");

app.use(express.static('static'));

// Routing
require('./route/index')(app);

app.use((err, req, res, next) => {
    res.end('Problem...');
    console.log(err);
});

/*app.use("/", (req, res) => {
    res.render("index", {asd: 'JS is garbage'});
});*/

app.listen(port_num, function () {
    console.log(`Running on :${port_num}`);
});